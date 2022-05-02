import { Component, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
})
export class ConfirmDialogComponent {
  title = '';
  message = '';
  @Output() onConfirm = new EventEmitter();

  constructor(
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    data: {
      title: string;
      message: string;
    }
  ) {
    if (data) {
      const { title, message } = data;
      this.title = title;
      this.message = message;
    }
  }

  handleConfirm() {
    this.onConfirm.emit();
    this.handleClose();
  }

  handleClose() {
    this.dialogRef.close();
  }
}
