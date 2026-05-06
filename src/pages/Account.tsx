// import { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { getCurrentUser, isAdminEmail, signOut, updatePassword } from '../lib/auth';
// import type { User } from '@supabase/supabase-js';

// export default function Account() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');
//   const [updating, setUpdating] = useState(false);

//   useEffect(() => {
//     const loadUser = async () => {
//       const currentUser = await getCurrentUser();
//       setUser(currentUser);
//       setLoading(false);
//     };

//     loadUser();
//   }, []);

//   const handleSignOut = async () => {
//     await signOut();
//     navigate('/login');
//   };

//   const handlePasswordUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError('');
//     setMessage('');

//     if (!password) {
//       setError('Please enter a new password.');
//       return;
//     }

//     setUpdating(true);
//     const { error: updateError } = await updatePassword(password);
//     setUpdating(false);

//     if (updateError) {
//       setError(updateError.message || 'Unable to update password.');
//       return;
//     }

//     setMessage('Your password was updated successfully.');
//     setPassword('');
//   };

//   if (loading) {
//     return (
//       <div className="min-h-[70vh] flex items-center justify-center">Loading your account…</div>
//     );
//   }

//   if (!user) {
//     return (
//       <section className="min-h-[70vh] flex items-center justify-center bg-[#f7fbf9] p-6">
//         <div className="max-w-lg w-full bg-white border border-[#e6f4ef] rounded-3xl shadow-xl p-10 text-center">
//           <h2 className="font-['Cormorant_Garamond'] text-3xl text-[#004d35] font-bold mb-4">You’re not signed in</h2>
//           <p className="text-gray-600 mb-6">Please log in to manage your account and update your password.</p>
//           <div className="flex flex-col sm:flex-row justify-center gap-3">
//             <Link to="/login" className="btn-primary px-6 py-3 text-sm font-semibold">
//               Log In
//             </Link>
//             <Link to="/signup" className="btn-outline px-6 py-3 text-sm font-semibold">
//               Create Account
//             </Link>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="min-h-[80vh] py-20 bg-[#f7fbf9]">
//       <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 flex gap-5">
//         {isAdminEmail(user.email) && (
//           <div className="w-64 bg-white rounded-3xl border border-[#e6f4ef] shadow-xl p-6">
//             <h2 className="font-['Cormorant_Garamond'] text-xl font-bold text-[#004d35] mb-6">Admin Panel</h2>
//             <nav className="space-y-3">
//               <Link
//                 to="/admin"
//                 className="block px-4 py-3 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
//               >
//                 Appointments
//               </Link>
//               <Link
//                 to="/account"
//                 className="block px-4 py-3 rounded-xl font-semibold text-[#004d35] bg-[#f7fbf9] border border-[#e6f4ef] hover:bg-[#e6f4ef] transition-colors"
//               >
//                 My Account
//               </Link>
//             </nav>
//           </div>
//         )}
//         <div className={isAdminEmail(user.email) ? "flex-1" : "max-w-4xl mx-auto"}>
//           <div className="bg-white rounded-3xl border border-[#e6f4ef] shadow-2xl p-10">
//             <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-10">
//               <div>
//                 <h1 className="font-['Cormorant_Garamond'] text-4xl font-bold text-[#c9a84c] mb-2">My Account</h1>
//                 <p className="text-gray-600">Manage your login details, update your password, and access admin tools if authorized.</p>
//               </div>
//               <button
//                 type="button"
//                 onClick={handleSignOut}
//                 className="w-1/5 bg-[#004d35] text-white rounded-xl  py-3 text-sm font-semibold hover:bg-[#003a29] transition-colors"
//               >
//                 Sign Out
//               </button>
//             </div>

//             <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
//               <div className="space-y-4 p-6 bg-[#f7fbf9] rounded-3xl border border-[#e6f4ef]">
//                 <div>
//                   <p className="text-xs font-semibold uppercase text-gray-500 tracking-[0.2em] mb-2">Signed in as</p>
//                   <p className="text-lg font-semibold text-[#004d35]">{user.email}</p>
//                 </div>
//                 <div>
//                   <p className="text-xs font-semibold uppercase text-gray-500 tracking-[0.2em] mb-2">Account type</p>
//                   <p className="text-sm text-gray-700">{isAdminEmail(user.email) ? 'Administrator' : 'Standard User'}</p>
//                 </div>
//                 {/* {isAdminEmail(user.email) && (
//                   <Link
//                     to="/admin"
//                     className="inline-flex items-center justify-center rounded-full border border-[#c9a84c] bg-[#fff8dc] py-3 px-4 text-sm font-semibold text-[#4b3b0c] hover:bg-[#f4e3a2] transition-colors"
//                   >
//                     Go to Admin Panel
//                   </Link>
//                 )} */}
//               </div>

//               <div className="p-6 bg-[#f7fbf9] rounded-3xl border border-[#e6f4ef]">
//                 <h2 className="font-semibold text-[#004d35] text-xl mb-4">Update Password</h2>
//                 <form onSubmit={handlePasswordUpdate} className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">New Password</label>
//                     <input
//                       type="password"
//                       value={password}
//                       onChange={(event) => setPassword(event.target.value)}
//                       placeholder="Enter a new password"
//                       className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a84c]"
//                       required
//                       minLength={8}
//                     />
//                   </div>

//                   {error && <p className="text-sm text-red-600">{error}</p>}
//                   {message && <p className="text-sm text-green-700">{message}</p>}

//                   <button
//                     type="submit"
//                     disabled={updating}
//                     className="w-full bg-[#004d35] text-white rounded-xl py-3 text-sm font-semibold hover:bg-[#003a29] transition-colors disabled:opacity-60"
//                   >
//                     {updating ? 'Updating…' : 'Update Password'}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { getCurrentUser, isAdminEmail, signOut, updatePassword } from '../lib/auth';
import type { User } from '@supabase/supabase-js';
import { 
  SettingsIcon, 
  LayoutDashboardIcon, 
  LogOutIcon,
  UserIcon,
  MailIcon,
  ShieldIcon,
  KeyIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckCircleIcon
} from 'lucide-react';

export default function Account() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [updating, setUpdating] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
      setLoading(false);
    };

    loadUser();
  }, []);

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  const handlePasswordUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setMessage('');

    if (!password) {
      setError('Please enter a new password.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    setUpdating(true);
    const { error: updateError } = await updatePassword(password);
    setUpdating(false);

    if (updateError) {
      setError(updateError.message || 'Unable to update password.');
      return;
    }

    setMessage('Your password was updated successfully.');
    setPassword('');
    setConfirmPassword('');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f7fbf9] to-[#e6f4ef] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c9a84c] mx-auto mb-4"></div>
          <p className="text-[#004d35] font-medium">Loading your account...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-[#f7fbf9] to-[#e6f4ef] flex items-center justify-center p-6">
        <div className="max-w-lg w-full bg-white border border-[#e6f4ef] rounded-3xl shadow-xl p-10 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-[#004d35] to-[#c9a84c] rounded-full flex items-center justify-center mx-auto mb-6">
            <UserIcon size={40} className="text-white" />
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-3xl text-[#004d35] font-bold mb-4">You're not signed in</h2>
          <p className="text-gray-600 mb-6">Please log in to manage your account and update your password.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/login" className="bg-[#004d35] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#003a29] transition-colors">
              Log In
            </Link>
            <Link to="/signup" className="border-2 border-[#004d35] text-[#004d35] px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#f7fbf9] transition-colors">
              Create Account
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const isAdmin = isAdminEmail(user.email);
  
  const navItems = [
    ...(isAdmin ? [{ path: '/admin', label: 'Appointments', icon: LayoutDashboardIcon }] : []),
    { path: '/account', label: 'My Account', icon: SettingsIcon },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7fbf9] to-[#e6f4ef]">
      <div className="flex h-screen overflow-hidden">
        {/* Professional Sidebar - Only show for admin users */}
        {isAdmin && (
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
                  onClick={handleSignOut}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors"
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
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">
            {/* Header Section */}
            <div className="mb-2">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-bold text-[#004d35] mb-2 font-['Cormorant_Garamond']">My Account</h1>
                  {/* <p className="text-gray-600">Manage your login details and account settings</p> */}
                </div>
               
              </div>
            </div>

            {/* Account Content */}
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Profile Information Card */}
                {/* <div className="bg-white rounded-2xl shadow-xl border border-[#e6f4ef] overflow-hidden">
                  <div className="bg-gradient-to-r from-[#004d35] to-[#006b4d] px-6 py-4">
                    <div className="flex items-center gap-3">
                      <UserIcon size={24} className="text-white" />
                      <h2 className="text-xl font-semibold text-white">Profile Information</h2>
                    </div>
                  </div>
                  <div className="p-6 space-y-5">
                    <div className="flex items-start gap-3 p-4 bg-[#f7fbf9] rounded-xl">
                      <MailIcon size={20} className="text-[#c9a84c] mt-0.5" />
                      <div className="flex-1">
                        <p className="text-xs font-semibold uppercase text-gray-500 tracking-wider mb-1">Email Address</p>
                        <p className="text-lg font-medium text-[#004d35]">{user.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 bg-[#f7fbf9] rounded-xl">
                      <ShieldIcon size={20} className="text-[#c9a84c] mt-0.5" />
                      <div className="flex-1">
                        <p className="text-xs font-semibold uppercase text-gray-500 tracking-wider mb-1">Account Type</p>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-medium text-[#004d35]">{isAdmin ? 'Administrator' : 'Standard User'}</span>
                          {isAdmin && (
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#c9a84c] text-white text-xs rounded-full">
                              <CheckCircleIcon size={12} />
                              Admin Access
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          {isAdmin 
                            ? 'Full access to manage appointments and system settings' 
                            : 'Standard user with appointment booking access'}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="h-px bg-gradient-to-r from-transparent via-[#e6f4ef] to-transparent"></div>
                    </div>

                    <div className="text-center text-sm text-gray-500">
                      <p>Member since {new Date(user.created_at || Date.now()).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div> */}

                {/* Update Password Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-[#e6f4ef] overflow-hidden">
                  <div className="bg-gradient-to-r from-[#c9a84c] to-[#d4b85c] px-6 py-4">
                    <div className="flex items-center gap-3">
                      <KeyIcon size={24} className="text-white" />
                      <h2 className="text-xl font-semibold text-white">Security Settings</h2>
                    </div>
                  </div>
                  <div className="p-6">
                    <form onSubmit={handlePasswordUpdate} className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">New Password</label>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter a new password"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a84c] transition-all"
                          required
                          minLength={8}
                        />
                        <p className="text-xs text-gray-500 mt-1">Minimum 8 characters</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm New Password</label>
                        <input
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Confirm your new password"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a84c] transition-all"
                          required
                          minLength={8}
                        />
                      </div>

                      {error && (
                        <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                          <p className="text-sm text-red-600">{error}</p>
                        </div>
                      )}
                      
                      {message && (
                        <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                          <p className="text-sm text-green-700 flex items-center gap-2">
                            <CheckCircleIcon size={16} />
                            {message}
                          </p>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={updating}
                        className="w-full bg-gradient-to-r from-[#004d35] to-[#006b4d] text-white rounded-xl py-3 text-sm font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-60"
                      >
                        {updating ? (
                          <span className="flex items-center justify-center gap-2">
                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                            Updating Password...
                          </span>
                        ) : (
                          'Update Password'
                        )}
                      </button>
                    </form>

                    <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <p className="text-xs text-blue-800">
                        <strong>Security Tip:</strong> Use a strong, unique password that you don't use on other websites. 
                        A good password should be at least 8 characters long and include a mix of letters, numbers, and symbols.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions for Non-Admin Users */}
              {!isAdmin && (
                <div className="mt-8 p-6 bg-white rounded-2xl shadow-xl border border-[#e6f4ef]">
                  <h3 className="text-lg font-semibold text-[#004d35] mb-4">Quick Actions</h3>
                  <div className="flex gap-4">
                    <Link
                      to="/"
                      className="px-4 py-2 bg-[#f7fbf9] text-[#004d35] rounded-xl text-sm font-semibold hover:bg-[#e6f4ef] transition-colors"
                    >
                      Book New Appointment
                    </Link>
                    <Link
                      to="/contact"
                      className="px-4 py-2 bg-[#f7fbf9] text-[#004d35] rounded-xl text-sm font-semibold hover:bg-[#e6f4ef] transition-colors"
                    >
                      Contact Support
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}