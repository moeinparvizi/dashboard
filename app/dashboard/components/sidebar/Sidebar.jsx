const menuItem = [
  {
    title: 'pages',
    list: [
      {
        title: 'dashboard',
        path: '/dashboard',
        icon: <MdDashboard />
      },
      {
        title: 'users',
        path: '/dashboard/users',
        icon: <MdSuperVisedUserCircle />
      },
      {
        title: 'products',
        path: '/dashboard/products',
        icon: <MdShoppingBag />
      },
      {
        title: 'transactions',
        path: '/dashboard/transactions',
        icon: <MdAttackMoney />
      },
    ],
  },
  {
    title: 'analytics',
    list: [
      {
        title: 'dashboard',
        path: '/dashboard',
        icon: <MdDashboard />
      },
      {
        title: 'users',
        path: '/dashboard/users',
        icon: <MdSuperVisedUserCircle />
      },
      {
        title: 'products',
        path: '/dashboard/products',
        icon: <MdShoppingBag />
      },
      {
        title: 'transactions',
        path: '/dashboard/transactions',
        icon: <MdAttackMoney />
      },
    ],
  },
]

const Sidebar = () => {
  return (
    <div>
      <h1>this is side bar</h1>
    </div>
  );
}

export default Sidebar;