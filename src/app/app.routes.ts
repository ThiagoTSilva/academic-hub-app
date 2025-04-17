
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth/auth.guard';


export const routes: Routes = [
    { path: '', component: LoginComponent }, 
    { path: 'login', redirectTo: '', pathMatch: 'full' },
    { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)},
    { path: 'course', loadComponent: () => import('./pages/course/course-dashboard/course-dashboard.component').then(m => m.CourseDashboardComponent) },
    { path: 'course/course-list', loadComponent: () => import('./pages/course/course-list/course-list.component').then(m => m.CourseListComponent) },
    { path: 'subject', loadComponent: () => import('./pages/subject/subject-dashboard/subject-dashboard.component').then(m => m.SubjectDashboardComponent) },
    { path: 'subject/subject-list', loadComponent: () => import('./pages/subject/subject-list/subject-list.component').then(m => m.SubjectListComponent) },
    { path: 'semester', loadComponent: () => import('./pages/semester/semester-dashboard/semester-dashboard.component').then(m => m.SemesterDashboardComponent) },
    { path: 'semester/semester-list', loadComponent: () => import('./pages/semester/semester-list/semester-list.component').then(m => m.SemesterListComponent) },
    { path: 'curriculum', loadComponent: () => import('./pages/curriculum/curriculum-dashboard/curriculum-dashboard.component').then(m => m.CurriculumDashboardComponent) },
    { path: 'curriculum/curriculum-list', loadComponent: () => import('./pages/curriculum/curriculum-list/curriculum-list.component').then(m => m.CurriculumListComponent) },
    { path: 'users', loadComponent: () => import('./pages/user/user-dashboard/user-dashboard.component').then(m => m.UserDashboardComponent)},
    { path: 'users/user-list', loadComponent: () => import('./pages/user/user-list/user-list.component').then(m => m.UserListComponent)},
    { path: '**', redirectTo: 'login' },
];
