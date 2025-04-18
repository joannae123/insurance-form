import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MockApiService } from '../mock-api.service';

@Component({
  selector: 'app-insurance-form',
  imports: [ReactiveFormsModule, MaterialModule],
  templateUrl: './insurance-form.component.html',
  styleUrls: ['./insurance-form.component.css']
})
export class InsuranceFormComponent implements OnInit {
  
  insuranceForm!: FormGroup;

  insuranceTypes: any[] = [];
  vehicles: any[] = [];
  
  constructor(private fb: FormBuilder, private mockApiService: MockApiService) {}

  ngOnInit() {
    // Fetching data from the mock API
    this.mockApiService.getInsuranceTypes().subscribe((data: any) => {
      this.insuranceTypes = data.insuranceTypes;
      this.vehicles = data.vehicles;
    });

    // Initializing the form
    this.insuranceForm = this.fb.group({ 
      owner: this.fb.group({ 
        firstName: ['', Validators.required], 
        lastName: ['', Validators.required], 
        email: ['', [Validators.required, Validators.email]], 
        phone: ['', [Validators.required]] 
      }), 
      address: this.fb.group({ 
        street: ['', Validators.required], 
        homeNumber: ['', Validators.required], 
        postalCode: ['', Validators.required], 
        city: ['', Validators.required], 
        country: ['', Validators.required] 
      }), 
      period: this.fb.group({ 
        fromDate: ['', Validators.required], 
        toDate: ['', this.pastDateValidator.bind(this)] 
      }), 
      insuranceTypes: this.fb.array([], Validators.required), 
      vehicleList: this.fb.array([]) 
    }); 

    this.addVehicle(); 
  }

  pastDateValidator(control: AbstractControl): ValidationErrors | null {
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Ignore time for comparison
  
    if (control.value && selectedDate < today) {
      return { pastDate: true };
    }
    return null;
  }

// Getter for the vehicleList FormArray
  get vehicleList(): FormArray {
    return this.insuranceForm.get('vehicleList') as FormArray;
  }

  // Getter for the insuranceTypes FormArray
  getInsuranceTypeControl(index: number) {
    return this.insuranceForm.get('insuranceTypes') as FormArray;
  }

//Toggle insurance type selection
  onToggleInsuranceType(id: string, event: any) {
    const formArray = this.getInsuranceTypeControl(0);
    if (event.checked) {
      formArray.push(this.fb.control(id));
    } else {
      const index = formArray.controls.findIndex(x => x.value === id);
      if (index !== -1) formArray.removeAt(index);
    }
  }

  // Add vehicle dynamically
  addVehicle() {
    const group = this.fb.group({
      type: ['', Validators.required],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      color: ['', Validators.required],
      productionDate: ['', Validators.required],
    });
    this.vehicleList.push(group);
  }

  // Remove vehicle dynamically
  removeVehicle(index: number) {
    this.vehicleList.removeAt(index);
  }

  // Fetching vehicle brands and models
  getBrands(vehicleTypeId: string) {
    return this.vehicles.find((v: { id: string; }) => v.id === vehicleTypeId)?.brands || [];
  }

  getModels(vehicleTypeId: string, brandId: string) {
    const type = this.vehicles.find((v: { id: string; }) => v.id === vehicleTypeId);
    return type?.brands.find((b: { id: string; }) => b.id === brandId)?.models || [];
  }

  // Handler for selecting vehicle type
  onVehicleTypeChange(vehicleId: string, index: number): void {
    const vehicleGroup = this.vehicleList.at(index);
    vehicleGroup?.get('brand')?.setValue('');
    vehicleGroup?.get('model')?.setValue('');
  }

  // Handler for selecting a brand
  onBrandChange(brandId: string, index: number): void {
    const vehicleGroup = this.vehicleList.at(index);
    vehicleGroup?.get('model')?.setValue('');
  }

  // Handler for form submission
  onSubmit() { 
    if (this.insuranceForm.valid) { 
      console.log('Form Submitted', this.insuranceForm.value);
    }
  }
}
