# 🎓 E-Learn Pro - Modern Learning Platform

A modern, responsive e-learning platform built with React that provides students and instructors with a seamless learning experience.

## ✨ Features

### 🎯 Core Features
- **User Authentication** - Secure login/register system
- **Course Management** - Browse, enroll, and track progress
- **Admin Panel** - Full CRUD operations for courses
- **Progress Tracking** - Visual progress indicators and completion certificates
- **Responsive Design** - Works perfectly on all devices

### 🚀 Advanced Features
- **Video Lessons** - Embedded video player with progress tracking
- **Interactive Dashboard** - Personal learning analytics
- **Role-based Access** - Separate interfaces for students and admins
- **Real-time Updates** - Instant progress synchronization
- **Modern UI/UX** - Beautiful animations and smooth interactions

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 18** | Frontend framework |
| **Vite** | Build tool and dev server |
| **Tailwind CSS v4** | Styling and UI components |
| **React Router DOM** | Client-side routing |
| **Framer Motion** | Animations and transitions |
| **Lucide React** | Beautiful icons |
| **Axios** | HTTP client for API calls |

### Backend & Data
| Technology | Purpose |
|------------|---------|
| **JSON Server** | Mock REST API backend |
| **Local Storage** | User session persistence |

## 📁 Project Structure

```
e-learn-pro/
├── public/                 # Static assets
├── src/
│   ├── api/
│   │   └── api.js         # Axios configuration
│   ├── components/         # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── CourseCard.jsx
│   │   ├── LessonCard.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── Loader.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context/           # React Context providers
│   │   ├── AuthContext.jsx
│   │   └── CourseContext.jsx
│   ├── hooks/             # Custom React hooks
│   │   └── useAuth.js
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── Courses.jsx
│   │   ├── CourseDetails.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── AdminPanel.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx           # Main app component
│   └── main.jsx          # App entry point
├── db.json               # JSON Server database
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd e-learn-pro
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development servers**

**Terminal 1 - JSON Server (Backend)**
```bash
npm run server
```
Runs on: `http://localhost:5000`

**Terminal 2 - React App (Frontend)**
```bash
npm run dev
```
Runs on: `http://localhost:5173`

4. **Open your browser**
Navigate to `http://localhost:5173`

## 👤 Default Accounts

### Admin Account
- **Email:** `admin@elearnpro.com`
- **Password:** `admin123`
- **Access:** Full admin privileges + course management

### Student Account
- **Email:** `student@test.com`
- **Password:** `123456`
- **Access:** Course enrollment and learning

## 📊 Database Schema

### Users
```json
{
  "id": 1,
  "username": "student1",
  "email": "student@test.com",
  "password": "123456",
  "role": "student",
  "enrolledCourses": [1, 2],
  "completedLessons": [1, 2, 5]
}
```

### Courses
```json
{
  "id": 1,
  "title": "React for Beginners",
  "description": "Learn React step by step...",
  "category": "Frontend",
  "difficulty": "Beginner",
  "duration": "12 hours",
  "students": 1500,
  "rating": 4.8,
  "thumbnail": "https://images.unsplash.com/...",
  "instructor": "John Doe",
  "price": 49.99,
  "lessons": [
    {
      "id": 1,
      "title": "Intro to React",
      "duration": "25:00",
      "videoUrl": "https://youtube.com/embed/...",
      "description": "Learn the basics...",
      "completed": false
    }
  ]
}
```

## 🎨 Pages Overview

### 🏠 Home Page (`/`)
- Hero section with call-to-action
- Featured courses showcase
- Platform benefits and features
- Responsive design with animations

### 📚 Courses Page (`/courses`)
- Grid layout of all available courses
- Search and filter functionality
- Category and difficulty filters
- Course cards with ratings and pricing

### 🎓 Course Details (`/courses/:id`)
- Comprehensive course information
- Lesson list with progress tracking
- Video player for lessons
- Enrollment system
- Progress tracking and completion marks

### 👤 Dashboard (`/dashboard`)
- Personal learning analytics
- Enrolled courses overview
- Progress visualization
- Completion statistics

### ⚡ Admin Panel (`/admin`)
- Full course management (CRUD)
- Student statistics
- Course analytics
- Add/edit/delete courses and lessons

### 🔐 Authentication
- **Login** (`/login`) - User authentication
- **Register** (`/register`) - New user registration

### ℹ️ Informational Pages
- **About** (`/about`) - Company information and team
- **Contact** (`/contact`) - Contact form and information
- **Privacy Policy** (`/privacy`) - Privacy policy and data handling

## 🎯 Component Features

### Navigation
- Responsive navbar with user menu
- Role-based navigation items
- Active route highlighting
- Mobile-friendly hamburger menu

### Course Management
- **Course Cards** - Attractive course previews
- **Progress Bars** - Visual progress indicators
- **Lesson Tracking** - Mark lessons as complete
- **Enrollment System** - Easy course enrollment

### Admin Features
- **Course CRUD** - Create, read, update, delete courses
- **Lesson Management** - Add lessons to courses
- **Statistics** - Platform analytics and insights
- **User Management** - View student progress

## 🛡️ Authentication & Authorization

### Protected Routes
- **Student Routes**: Dashboard, course enrollment
- **Admin Routes**: Admin panel, course management
- **Public Routes**: Home, courses, about, contact

### Security Features
- Route protection based on user roles
- Session persistence with localStorage
- Password protection (basic)
- Role-based UI components

## 🎨 Styling & UI

### Design System
- **Colors**: Blue primary palette with complementary colors
- **Typography**: Inter font family
- **Spacing**: Consistent 8px grid system
- **Components**: Reusable with Tailwind CSS

### Animations
- **Page Transitions**: Smooth route changes
- **Hover Effects**: Interactive element states
- **Loading States**: Skeleton screens and spinners
- **Micro-interactions**: Button and card animations

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile-First Features
- Hamburger navigation menu
- Stacked layouts on mobile
- Touch-friendly buttons
- Optimized images and videos

## 🔧 Configuration

### Environment Setup
1. **Tailwind CSS v4** - No configuration required
2. **Vite** - Optimized build configuration
3. **JSON Server** - Mock API with custom routes

### Customization
- Modify `db.json` for custom data
- Update colors in Tailwind configuration
- Add new pages in `src/pages/`
- Extend components in `src/components/`

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
```
Deploy the `dist` folder to your preferred hosting service.

### Backend (Render/Railway)
Deploy `db.json` to a JSON Server hosting service or replace with a real backend API.

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   - Change ports in `package.json` scripts
   - Use `npm run server -- --port 3001`

2. **CORS issues**
   - JSON Server runs on port 5000
   - Ensure both servers are running

3. **Styling not loading**
   - Check Tailwind CSS configuration
   - Verify `src/index.css` imports

4. **API errors**
   - Confirm JSON Server is running
   - Check network tab in dev tools

## 📈 Future Enhancements

### Planned Features
- [ ] Real backend integration
- [ ] Payment processing
- [ ] Video streaming service
- [ ] Discussion forums
- [ ] Live classes
- [ ] Mobile app
- [ ] Advanced analytics
- [ ] Certificate generation
- [ ] Multi-language support
- [ ] Dark mode

### Technical Improvements
- [ ] State management with Zustand/Redux
- [ ] API caching and optimization
- [ ] PWA capabilities
- [ ] Performance monitoring
- [ ] Automated testing


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Mahmoud** - Full Stack Developer
- **E-Learn Pro Team** - Education Technology Enthusiasts

## 📞 Support

For support, email `support@elearnpro.com` or create an issue in the repository.

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

**Built with ❤️ using React and Modern Web Technologies**

</div>



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
