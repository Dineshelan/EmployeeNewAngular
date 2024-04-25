import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  
  id: number;

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.deleteEmployee();
  }

  deleteEmployee(){
    this.employeeService.deleteEmployee(this.id).subscribe(data =>{
      console.log("Employee deleted successfully.");
      this.goToEmployeeList();
    }, error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}
