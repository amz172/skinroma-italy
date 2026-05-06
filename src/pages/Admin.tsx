import { useEffect, useState } from 'react';
import { Navigate, Link, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { getCurrentUser, isAdminEmail } from '../lib/auth';
import type { User } from '@supabase/supabase-js';
import { 
  CalendarIcon, 
  UsersIcon, 
  ClipboardIcon, 
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  LogOutIcon,
  SettingsIcon,
  LayoutDashboardIcon,
  MessageSquareIcon,
  EyeIcon,
    CrossIcon,
  PhoneIcon,
  CalendarDaysIcon,
  TextIcon,
  
  UserIcon,
  TagIcon
} from 'lucide-react';

type Appointment = {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  service: string;
  preferred_date: string | null;
  message: string | null;
  status: string | null;
  created_at: string | null;
};

const statusOptions = ['pending', 'confirmed', 'completed', 'cancelled'];

const statusColors = {
  pending: 'bg-amber-50 text-amber-700 border-amber-200',
  confirmed: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  completed: 'bg-blue-50 text-blue-700 border-blue-200',
  cancelled: 'bg-rose-50 text-rose-700 border-rose-200',
};

const statusIcons = {
  pending: ClockIcon,
  confirmed: CheckCircleIcon,
  completed: ClipboardIcon,
  cancelled: XCircleIcon,
};

export default function Admin() {
  const [user, setUser] = useState<User | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filterStatus, setFilterStatus] = useState('pending');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const loadData = async (page = currentPage, status = filterStatus) => {
    setLoading(true);
    setError('');

    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    const query = supabase
      .from('appointments')
      .select('id, name, phone, email, service, preferred_date, message, status, created_at', { count: 'exact' })
      .order('created_at', { ascending: false });

    if (status !== 'all') {
      query.eq('status', status);
    }

    const { data, error: fetchError, count } = await query.range(from, to);

    if (fetchError) {
      setError(fetchError.message || 'Unable to load appointments.');
    } else {
      setAppointments(data ?? []);
      setTotalCount(count ?? 0);
    }
    setLoading(false);
  };

  useEffect(() => {
    const init = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);

      if (!currentUser || !isAdminEmail(currentUser.email)) {
        setLoading(false);
        return;
      }

      await loadData();
    };
    init();
  }, []);

  const handleFilterChange = async (newStatus: string) => {
    setFilterStatus(newStatus);
    setCurrentPage(1);
    await loadData(1, newStatus);
  };

  const handlePageChange = async (newPage: number) => {
    setCurrentPage(newPage);
    await loadData(newPage, filterStatus);
  };

  const updateStatus = async (id: string, newStatus: string) => {
    const { error: updateError } = await supabase
      .from('appointments')
      .update({ status: newStatus })
      .eq('id', id);

    if (updateError) {
      setError(updateError.message || 'Unable to update status.');
    } else {
      await loadData(currentPage, filterStatus);
    }
  };

  const totalPages = Math.ceil(totalCount / pageSize);

  const openModal = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAppointment(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f7fbf9] to-[#e6f4ef] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c9a84c] mx-auto mb-4"></div>
          <p className="text-[#004d35] font-medium">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!isAdminEmail(user.email)) {
    return <Navigate to="/account" replace />;
  }

  const navItems = [
    { path: '/admin', label: 'Appointments', icon: LayoutDashboardIcon },
    { path: '/account', label: 'My Account', icon: SettingsIcon },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7fbf9] to-[#e6f4ef]">
      <div className="flex h-screen overflow-hidden">
        {/* Professional Sidebar */}
        <aside 
          className={`${
            sidebarCollapsed ? 'w-20' : 'w-80'
          } bg-white shadow-2xl transition-all duration-300 ease-in-out flex flex-col relative z-10`}
        >
          {/* Sidebar Header */}
          <div className="p-6 border-b border-[#e6f4ef]">
            {!sidebarCollapsed ? (
              <div>
                <h1 className="font-['Cormorant_Garamond'] text-3xl font-bold text-[#004d35]">Admin Panel</h1>
                <p className="text-xs text-gray-500 mt-1">Manage appointments & settings</p>
              </div>
            ) : (
              <div className="flex justify-center">
                <div className="w-10 h-10 bg-gradient-to-br from-[#004d35] to-[#c9a84c] rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
              </div>
            )}
          </div>

          {/* Admin Info */}
          {!sidebarCollapsed && (
            <div className="mx-4 mt-4 p-4 bg-gradient-to-r from-[#f7fbf9] to-[#e6f4ef] rounded-xl border border-[#e6f4ef]">
              <p className="text-xs text-gray-500 mb-1">Signed in as</p>
              <p className="text-sm font-semibold text-[#004d35] truncate">{user.email}</p>
              <span className="inline-block mt-2 px-2 py-1 bg-[#c9a84c] text-white text-xs rounded-full">Administrator</span>
            </div>
          )}

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                    ${isActive 
                      ? 'bg-gradient-to-r from-[#004d35] to-[#006b4d] text-white shadow-lg' 
                      : 'text-gray-700 hover:bg-[#f7fbf9] hover:text-[#004d35]'
                    }
                  `}
                >
                  <Icon size={20} className={isActive ? 'text-white' : 'text-gray-500 group-hover:text-[#004d35]'} />
                  {!sidebarCollapsed && (
                    <span className="font-medium">{item.label}</span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-[#e6f4ef]">
            {!sidebarCollapsed && (
              <button
                onClick={async () => {
                  await supabase.auth.signOut();
                  window.location.href = '/';
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-rose-600 hover:bg-rose-50 transition-colors"
              >
                <LogOutIcon size={20} />
                <span className="font-medium">Sign Out</span>
              </button>
            )}
          </div>

          {/* Collapse Toggle */}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="absolute -right-3 top-20 bg-white border border-[#e6f4ef] rounded-full p-1.5 shadow-md hover:shadow-lg transition-all"
          >
            <ChevronLeftIcon size={16} className={`text-[#004d35] transition-transform ${sidebarCollapsed ? 'rotate-180' : ''}`} />
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-[#004d35] mb-2">Appointment Records</h2>
                </div>
              </div>
            </div>

            {error && (
              <div className="mb-6 rounded-xl border border-rose-200 bg-rose-50 p-5 text-sm text-rose-700">
                {error}
              </div>
            )}

            {/* Filter Section */}
            <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <label className="text-sm font-semibold text-gray-700">Filter by Status:</label>
                <select
                  value={filterStatus}
                  onChange={(e) => handleFilterChange(e.target.value)}
                  className="border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a84c] bg-white"
                >
                  <option value="all">All Appointments</option>
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="text-sm text-gray-500">
                Total: <span className="font-semibold text-[#004d35]">{totalCount}</span> appointments
              </div>
            </div>

            {/* Appointments Table - Redesigned with better notes display */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#e6f4ef]">
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-[#004d35] text-white">
                    <tr>
                      {/* <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Submitted</th> */}
                      <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Name</th>
                      <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Contact</th>
                      <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Service</th>
                      <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Date</th>
                      {/* <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Status</th> */}
                      <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Update</th>
                      {/* <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Notes</th> */}
                      <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e6f4ef]">
                    {appointments.length === 0 ? (
                      <tr>
                        <td colSpan={9} className="px-6 py-12 text-center text-gray-500">
                          <MessageSquareIcon size={48} className="mx-auto mb-3 text-gray-300" />
                          <p>No appointments found</p>
                        </td>
                      </tr>
                    ) : (
                      appointments.map((appointment) => {
                        const StatusIcon = statusIcons[appointment.status as keyof typeof statusIcons] || ClockIcon;
                        const hasMessage = appointment.message && appointment.message.trim().length > 0;
                        const messagePreview = hasMessage 
                          ? (appointment.message!.length > 60 
                              ? appointment.message!.substring(0, 60) + '...' 
                              : appointment.message)
                          : '';
                        return (
                          <tr key={appointment.id} className="hover:bg-[#f7fbf9] transition-colors group">
                            {/* <td className="px-6 py-4 text-xs text-gray-500 whitespace-nowrap">
                              {appointment.created_at ? new Date(appointment.created_at).toLocaleDateString() : '—'}
                            </td> */}
                            <td className="px-6 py-4">
                              <div className="font-semibold text-[#004d35]">{appointment.name}</div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-gray-700 text-sm">{appointment.phone}</div>
                              <div className="text-gray-400 text-xs truncate max-w-[180px]">{appointment.email || '—'}</div>
                            </td>
                            <td className="px-6 py-4">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#f7fbf9] text-[#004d35] border border-[#e6f4ef]">
                                {appointment.service}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-gray-700 whitespace-nowrap">
                              {appointment.preferred_date || '—'}
                            </td>
                            {/* <td className="px-6 py-4">
                              <span className={`
                                inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border
                                ${statusColors[appointment.status as keyof typeof statusColors] || statusColors.pending}
                              `}>
                                <StatusIcon size={12} />
                                {appointment.status || 'pending'}
                              </span>
                            </td> */}
                            <td className="px-6 py-4">
                              <select
                                value={appointment.status || 'pending'}
                                onChange={(e) => updateStatus(appointment.id, e.target.value)}
                                className="border border-gray-200 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#c9a84c] bg-white cursor-pointer hover:border-[#c9a84c] transition-colors"
                              >
                                {statusOptions.map((status) => (
                                  <option key={status} value={status}>
                                    {status.charAt(0).toUpperCase() + status.slice(1)}
                                  </option>
                                ))}
                              </select>
                            </td>
                            {/* <td className="px-6 py-4">
                              {hasMessage ? (
                                <div className="flex items-center gap-2 max-w-xs">
                                  <MessageSquareIcon size={14} className="text-[#c9a84c] flex-shrink-0" />
                                  <span className="text-gray-600 text-sm truncate">{messagePreview}</span>
                                </div>
                              ) : (
                                <div className="text-gray-400 text-sm italic flex items-center gap-1">
                                  <TextIcon size={12} />
                                  No notes
                                </div>
                              )}
                            </td> */}
                            <td className="px-6 py-4">
                              <button
                                onClick={() => openModal(appointment)}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[#004d35] bg-[#f7fbf9] border border-[#e6f4ef] hover:bg-[#e6f4ef] hover:border-[#c9a84c] transition-all duration-200"
                              >
                                <EyeIcon size={14} />
                                View Details
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
                <div className="text-sm text-gray-500">
                  Showing {(currentPage - 1) * pageSize + 1} to {Math.min(currentPage * pageSize, totalCount)} of {totalCount} results
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                  >
                    <ChevronLeftIcon size={16} />
                    Previous
                  </button>
                  <div className="flex gap-1">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      
                      return (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          className={`px-3 py-2 text-sm font-semibold rounded-xl transition-colors ${
                            currentPage === pageNum
                              ? 'bg-[#004d35] text-white'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                  >
                    Next
                    <ChevronRightIcon size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Appointment Details Modal */}
      {isModalOpen && selectedAppointment && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-black bg-opacity-50" onClick={closeModal}></div>

            <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <  CrossIcon
 size={24} />
                </button>
              </div>

              <div className="bg-white px-6 pt-6 pb-5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#004d35] to-[#c9a84c] rounded-xl flex items-center justify-center">
                    <CalendarIcon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#004d35]">Appointment Details</h3>
                    <p className="text-xs text-gray-500">ID: {selectedAppointment.id.slice(0, 8)}...</p>
                  </div>
                </div>

                <div className="space-y-5">
                  {/* Client Information */}
                  <div className="bg-[#f7fbf9] rounded-xl p-4 border border-[#e6f4ef]">
                    <h4 className="text-sm font-semibold text-[#004d35] mb-3 flex items-center gap-2">
                      <UserIcon size={16} className="text-[#c9a84c]" />
                      Client Information
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <span className="text-sm text-gray-500">Full Name</span>
                        <span className="text-sm font-medium text-gray-800">{selectedAppointment.name}</span>
                      </div>
                      <div className="flex items-start justify-between">
                        <span className="text-sm text-gray-500 flex items-center gap-1">Phone</span>
                        <span className="text-sm text-gray-800">{selectedAppointment.phone}</span>
                      </div>
                      {selectedAppointment.email && (
                        <div className="flex items-start justify-between">
                          <span className="text-sm text-gray-500 flex items-center gap-1">Email</span>
                          <span className="text-sm text-gray-800 break-all text-right max-w-[250px]">{selectedAppointment.email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Appointment Information */}
                  <div className="bg-[#f7fbf9] rounded-xl p-4 border border-[#e6f4ef]">
                    <h4 className="text-sm font-semibold text-[#004d35] mb-3 flex items-center gap-2">
                      <CalendarDaysIcon size={16} className="text-[#c9a84c]" />
                      Appointment Information
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <span className="text-sm text-gray-500">Service</span>
                        <span className="text-sm font-medium text-gray-800">{selectedAppointment.service}</span>
                      </div>
                      <div className="flex items-start justify-between">
                        <span className="text-sm text-gray-500">Preferred Date</span>
                        <span className="text-sm text-gray-800">{selectedAppointment.preferred_date || 'Not specified'}</span>
                      </div>
                      <div className="flex items-start justify-between">
                        <span className="text-sm text-gray-500">Submitted</span>
                        <span className="text-sm text-gray-800">
                          {selectedAppointment.created_at 
                            ? new Date(selectedAppointment.created_at).toLocaleString()
                            : '—'}
                        </span>
                      </div>
                      <div className="flex items-start justify-between">
                        <span className="text-sm text-gray-500">Status</span>
                        <span className={`
                          inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border
                          ${statusColors[selectedAppointment.status as keyof typeof statusColors] || statusColors.pending}
                        `}>
                          {/* {React.createElement(statusIcons[selectedAppointment.status as keyof typeof statusIcons] || ClockIcon, { size: 12 })}
                          {selectedAppointment.status || 'pending'} */}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Notes / Message */}
                  <div className="bg-[#f7fbf9] rounded-xl p-4 border border-[#e6f4ef]">
                    <h4 className="text-sm font-semibold text-[#004d35] mb-3 flex items-center gap-2">
                      <TextIcon size={16} className="text-[#c9a84c]" />
                      Consultation Notes / Message
                    </h4>
                    {selectedAppointment.message ? (
                      <div className="bg-white rounded-lg p-3 border border-[#e6f4ef]">
                        <p className="text-gray-700 text-sm whitespace-pre-wrap leading-relaxed">
                          {selectedAppointment.message}
                        </p>
                      </div>
                    ) : (
                      <p className="text-gray-400 text-sm italic">No notes provided for this appointment.</p>
                    )}
                  </div>

                  {/* Quick Status Update */}
                  <div className="pt-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Update Status</label>
                    <div className="flex gap-3">
                      {statusOptions.map((status) => (
                        <button
                          key={status}
                          onClick={async () => {
                            await updateStatus(selectedAppointment.id, status);
                            if (selectedAppointment) {
                              setSelectedAppointment({ ...selectedAppointment, status });
                            }
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all capitalize ${
                            selectedAppointment.status === status
                              ? status === 'pending'
                                ? 'bg-amber-100 text-amber-700 border border-amber-200'
                                : status === 'confirmed'
                                ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                                : status === 'completed'
                                ? 'bg-blue-100 text-blue-700 border border-blue-200'
                                : 'bg-rose-100 text-rose-700 border border-rose-200'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-transparent'
                          }`}
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-6 py-4 flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}