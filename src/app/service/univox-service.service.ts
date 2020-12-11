import { Injectable } from '@angular/core';
import { HttpUtilsService } from './http-utils.service';

@Injectable({
  providedIn: 'root'
})
export class UnivoxService {

  private mainUrl = '/api/v1';

  private getUsersEndPoint: string;
  private createUserEndPoint: string;
  private getUsersByIdEndPoint: string;
  private updateUsersEndPoint: string;
  private deleteUsersEndPoint: string;

  private getFacultyEndPoint: string;
  private createFacultyEndPoint: string;
  private getFacultyByIdEndPoint: string;
  private updateFacultyEndPoint: string;
  private deleteFacultyEndPoint: string;

  private getDegreeEndPoint: string;
  private createDegreeEndPoint: string;
  private getDegreeByIdEndPoint: string;
  private updateDegreeEndPoint: string;
  private deleteDegreeEndPoint: string;

  private getCriteriaEndPoint: string;
  private createCriteriaEndPoint: string;
  private getCriteriaByIdEndPoint: string;
  private updateCriteriaEndPoint: string;
  private deleteCriteriaEndPoint: string;

  private getNvqApplicantEndPoint: string;
  private getAlApplicantEndPoint: string;
  private createApplicantEndPoint: string;
  private updateApplicantEndPoint: string;
  private createNvqBulkApplicantEndPoint: string;
  private createAlBulkApplicantEndPoint: string;

  private getMarksEndPoint: string;
  private createMarksEndPoint: string;
  private getMarksByIdEndPoint: string;
  private updateMarksEndPoint: string;
  private deleteNvqMarksEndPoint: string;
  private deleteAlMarksEndPoint: string;

  private createReportsEndPoint: string;

  private getDetailsEndPoint: string;
  private createDetailsEndPoint: string;
  private uploadFileEndPoint: string;

  constructor(private http: HttpUtilsService) {
    // USERS
    this.getUsersEndPoint = this.mainUrl + '/users';
    this.createUserEndPoint = this.mainUrl + '/users';
    this.getUsersByIdEndPoint = this.mainUrl + '/users';
    this.updateUsersEndPoint = this.mainUrl + '/users/{id}';
    this.deleteUsersEndPoint = this.mainUrl + '/users/{id}';

    // FACULTY
    this.getFacultyEndPoint = this.mainUrl + '/faculties';
    this.createFacultyEndPoint = this.mainUrl + '/faculties';
    this.getFacultyByIdEndPoint = this.mainUrl + '/faculties';
    this.updateFacultyEndPoint = this.mainUrl + '/faculties/{id}';
    this.deleteFacultyEndPoint = this.mainUrl + '/faculties/{id}';

    // DEGREE
    this.getDegreeEndPoint = this.mainUrl + '/degrees';
    this.createDegreeEndPoint = this.mainUrl + '/degrees';
    this.getDegreeByIdEndPoint = this.mainUrl + '/degrees';
    this.updateDegreeEndPoint = this.mainUrl + '/degrees/{id}';
    this.deleteDegreeEndPoint = this.mainUrl + '/degrees/{id}';

    // CRITERIA
    this.getCriteriaEndPoint = this.mainUrl + '/criterias';
    this.createCriteriaEndPoint = this.mainUrl + '/criterias';
    this.getCriteriaByIdEndPoint = this.mainUrl + '/criterias';
    this.updateCriteriaEndPoint = this.mainUrl + '/criterias/{id}';
    this.deleteCriteriaEndPoint = this.mainUrl + '/criterias/{id}';

    // APPLICANTS
    this.getNvqApplicantEndPoint = this.mainUrl + '/applicants/nvq/details';
    this.getAlApplicantEndPoint = this.mainUrl + '/applicants/al/details';
    this.createApplicantEndPoint = this.mainUrl + '/applicants';
    this.updateApplicantEndPoint = this.mainUrl + '/applicants/{applicationNo}';
    this.createNvqBulkApplicantEndPoint = this.mainUrl + '/applicants/transform/nvq_students';
    this.createAlBulkApplicantEndPoint = this.mainUrl + '/applicants/transform/al_students';

    // MARKS
    this.getMarksEndPoint = this.mainUrl + '/applicants/marks';
    this.createMarksEndPoint = this.mainUrl + '/applicants/marks';
    this.getMarksByIdEndPoint = this.mainUrl + '/applicants/marks/nvq/{id}';
    this.updateMarksEndPoint = this.mainUrl + '/applicants/marks';
    this.deleteNvqMarksEndPoint = this.mainUrl + '/applicants/marks/nvq/{id}';
    this.deleteAlMarksEndPoint = this.mainUrl + '/applicants/marks/al/{id}';

    // REPORTS
    this.createReportsEndPoint = this.mainUrl + '/reports';

    //REGISTRATION
    this.getDetailsEndPoint = 'http://139.162.14.211:8080/students/{nic}';
    this.createDetailsEndPoint = 'http://139.162.14.211:8080/students/{id}';
    this.uploadFileEndPoint = 'http://139.162.14.211:8080/upload';
  }


  public getAllUsers() {
    const get = this.getUsersEndPoint;
    return this.http.get(get);
  }
  public createUser(data) {
    const create = this.createUserEndPoint;
    return this.http.post(create, data);
  }
  public getUserById() {
    const getUserById = this.getUsersByIdEndPoint;
    return this.http.get(getUserById);
  }
  public updateUserById(id, data) {
    const updateUserById = this.updateUsersEndPoint.replace(
      '{id}', id
    );
    return this.http.put(updateUserById, data);
  }
  public deleteUser(id) {
    const deleteUser = this.deleteUsersEndPoint.replace(
      '{id}', id
    );
    return this.http.delete(deleteUser);
  }

  public getAllFaculties() {
    const faculties = this.getFacultyEndPoint;
    return this.http.get(faculties);
  }
  public createFaculty(data) {
    const create = this.createFacultyEndPoint;
    return this.http.post(create, data);
  }
  public getFacultyById() {
    const getFacultyById = this.getFacultyByIdEndPoint;
    return this.http.get(getFacultyById);
  }
  public updateFacultyById(id, data) {
      const updateFacultyById = this.updateFacultyEndPoint.replace(
        '{id}', id
      );
      return this.http.put(updateFacultyById, data);
  }
  public deleteFaculty(id) {
      const deleteFaculty = this.deleteFacultyEndPoint.replace(
        '{id}', id
      );
      return this.http.delete(deleteFaculty);
  }

  public getAllDegrees() {
    const degrees = this.getDegreeEndPoint;
    return this.http.get(degrees);
  }
  public createDegree(data) {
    const create = this.createDegreeEndPoint;
    return this.http.post(create, data);
  }
  public getDegreeById() {
    const getDegreeById = this.getDegreeByIdEndPoint;
    return this.http.get(getDegreeById);
  }
  public updateDegreeById(id, data) {
      const updateDegreeById = this.updateDegreeEndPoint.replace(
        '{id}', id
      );
      return this.http.put(updateDegreeById, data);
  }
  public deleteDegree(id) {
      const deleteDegree = this.deleteDegreeEndPoint.replace(
        '{id}', id
      );
      return this.http.delete(deleteDegree);
  }

  public getAllCriterias() {
    const criteria = this.getCriteriaEndPoint;
    return this.http.get(criteria);
  }
  public createCriteria(data) {
    const create = this.createCriteriaEndPoint;
    return this.http.post(create, data);
  }
  public getCriteriaById() {
    const getCriteriaById = this.getCriteriaByIdEndPoint;
    return this.http.get(getCriteriaById);
  }
  public updateCriteriaById(id, data) {
    const updateCriteriaById = this.updateCriteriaEndPoint.replace(
      '{id}', id
    );
    return this.http.put(updateCriteriaById, data);
  }
  public deleteCriteria(id) {
    const deleteCriteria = this.deleteCriteriaEndPoint.replace(
      '{id}', id
    );
    return this.http.delete(deleteCriteria);
  }

  public getNvqApplicant() {
    const get = this.getNvqApplicantEndPoint;
    return this.http.get(get);
  }
  public getAlApplicant() {
    const get = this.getAlApplicantEndPoint;
    return this.http.get(get);
  }
  public createApplicant(data) {
    const create = this.createApplicantEndPoint;
    return this.http.post(create, data);
  }
  public createNvqBulkApplicant(data) {
    const create = this.createNvqBulkApplicantEndPoint;
    return this.http.multiPart(create, data, '');
  }
  public createAlBulkApplicant(data) {
    const create = this.createAlBulkApplicantEndPoint;
    return this.http.multiPart(create, data, '');
  }
  public updateNvqApplicant(applicationNo, data) {
    const updateNvqApplicant = this.updateApplicantEndPoint.replace(
      '{applicationNo}', applicationNo
    );
    return this.http.put(updateNvqApplicant, data);
  }
  public updateAlApplicant(applicationNo, data) {
    const updateAlApplicant = this.updateApplicantEndPoint.replace(
      '{applicationNo}', applicationNo
    );
    return this.http.put(updateAlApplicant, data);
  }

  public getAllMarks() {
    const marks = this.getMarksEndPoint;
    return this.http.get(marks);
  }
  public createMark(data) {
    const create = this.createMarksEndPoint;
    return this.http.post(create, data);
  }
  public updateMarkById(data) {
    const updateMarkById = this.updateMarksEndPoint;
    return this.http.put(updateMarkById, data);
  }
  public deleteNvqMark(id) {
      const deleteMark = this.deleteNvqMarksEndPoint.replace(
        '{id}', id
      );
      return this.http.delete(deleteMark);
  }
  public deleteAlMark(id) {
    const deleteMark = this.deleteAlMarksEndPoint.replace(
      '{id}', id
    );
    return this.http.delete(deleteMark);
}

  public createReports(data) {
    const createReports = this.createReportsEndPoint;
    return this.http.post(createReports, data);
  }

  ///////////
  public getRegisterDetails(nic) {
    const getDetails = this.getDetailsEndPoint.replace(
      '{nic}', nic
    );
    return this.http.get(getDetails);
  }
  public saveData(data, id) {
    const create = this.createDetailsEndPoint.replace(
      '{id}', id
    );
    return this.http.put(create, data);
  }
  public uploadFiles(data, type) {
    const upload = this.uploadFileEndPoint;
    return this.http.multiPart(upload, data, type);
  }
}
