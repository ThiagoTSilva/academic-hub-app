
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { SubjectDashboardComponent } from './pages/subject/subject-dashboard/subject-dashboard.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CourseDashboardComponent } from './pages/course/course-dashboard/course-dashboard.component';
import { SemesterDashboardComponent } from './pages/semester/semester-dashboard/semester-dashboard.component';
import { CurriculumDashboardComponent } from './pages/curriculum/curriculum-dashboard/curriculum-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { SemesterComponent } from './pages/semester/semester.component';
import { CourseComponent } from './pages/course/course.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';


export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', redirectTo: '', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    {
        path: 'course',
        children: [
            { path: '', component: CourseDashboardComponent },
            { path: 'new', component: CourseComponent },
            { path: 'edit/:id', component: CourseComponent }
        ]
    },
    {
        path: 'subject',
        children: [
            { path: '', component: SubjectDashboardComponent },
            { path: 'new', component: SubjectComponent },
            { path: 'edit/:id', component: SubjectComponent }
        ]
    },
    {
        path: 'semester',
        children: [
            { path: '', component: SemesterDashboardComponent },
            { path: 'new', component: SemesterComponent },
            { path: 'edit/:id', component: SemesterComponent }
        ]
    },
    {
        path: 'curriculum',
        children: [
            { path: '', component: CurriculumDashboardComponent},
            { path: 'associate', component: CurriculumComponent}
        ]
    },
    {
        path: 'user',
        children: [
            { path: '', component: UserDashboardComponent },
            { path: 'new', component: UserComponent },
            { path: 'edit/:id', component: UserComponent }
        ]
    },
    { path: '**', redirectTo: 'login' },
];
