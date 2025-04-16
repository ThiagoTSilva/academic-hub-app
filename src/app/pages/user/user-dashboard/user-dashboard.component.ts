import { Component } from '@angular/core';
import { UserDto } from '../../../models/users/user.dto';
import { UserService } from '../../../services/user/user-service.service';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-user-dashboard',
  imports: [UserListComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  users: UserDto[] = [];  // Lista de usuários

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  // Método que recebe o ID do usuário e lida com a atualização
  onUpdateUser(id: string) {
    console.log(`Atualizando o usuário com ID: ${id}`);
    // Aqui você pode implementar a lógica para abrir o formulário de atualização
    // ou redirecionar para uma página de atualização
  }

}
