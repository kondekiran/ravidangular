import { Component, Inject, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-table-edit',
  templateUrl: './table-edit.component.html',
  styleUrls: ['./table-edit.component.scss'],
})
export class TableEditComponent {
  form: any = FormGroup;
  @Inject(MAT_DIALOG_DATA) public data: any;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TableEditComponent>
  ) {}
  ngOnInit(): void {
    console.log(this.data, 'wewq');
    this.FormBuild();
  }

  /* Method to build the form group for get  informations */
  FormBuild(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      Year: ['', Validators.required],
      Color: [''],
    });
  }
  submit() {
    console.log(this.form.getRawValue());
    this.dialogRef.close();
  }
}
