import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: LoginComponent }, 
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: '**', redirectTo: '' },
    { path: 'course', loadComponent: () => import('./pages/course/course.component').then(m => m.CourseComponent) },
    { path: 'subject', loadComponent: () => import('./pages/subject/subject.component').then(m => m.SubjectComponent) },
    { path: 'semester', loadComponent: () => import('./pages/semester/semester.component').then(m => m.SemesterComponent) },
    { path: 'curriculum', loadComponent: () => import('./pages/curriculum/curriculum.component').then(m => m.CurriculumComponent) },
    { path: 'users', loadComponent: () => import('./pages/user/user-dashboard/user-dashboard.component').then(m => m.UserDashboardComponent)},
    { path: 'users/user-list', loadComponent: () => import('./pages/user/user-list/user-list.component').then(m => m.UserListComponent)}
];
