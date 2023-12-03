// import icons
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttackMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
} from 'react-icons/md'

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
        icon: <MdSupervisedUserCircle />
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
      }
    ]
  },
  {
    title: 'analytics',
    list: [
      {
        title: 'revenue',
        path: '/dashboard/revenue',
        icon: <MdWork />
      },
      {
        title: 'reports',
        path: '/dashboard/reports',
        icon: <MdAnalytics />
      },
      {
        title: 'teams',
        path: '/dashboard/teams',
        icon: <MdPeople />
      }
    ]
  },
  {
    title: 'user',
    list: [
      {
        title: 'settings',
        path: '/dashboard/settings',
        icon: <MdOutlineSettings />
      },
      {
        title: 'help',
        path: '/dashboard/help',
        icon: <MdHelpCenter />
      }
    ]
  }
]

const Sidebar = () => {
  return (
    <div>
      <ul>
        {menuItem.map(item => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;