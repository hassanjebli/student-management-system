import { ENDPOINT } from "./constants.js";

export default class Etudiant {
  static MAX_NOTE = 20;

  constructor(name, age, note) {
    this.name = name;
    this.age = age;
    this.note = note;
  }

  getAge = () => new Date().getFullYear() - new Date(this.age).getFullYear();
  isAdmitted = () => this.note >= 10;

  static allEtudiants = async () => {
    const response = await fetch(ENDPOINT);
    return await response.json();
  };

  static getNextId = async () => {
    const etudiants = await this.allEtudiants();
    return etudiants.length ? (Math.max(...etudiants.map(e => e.id)) + 1).toString() : "1";
  };

  addEtudiant = async () => {
    const id = await Etudiant.getNextId();
    await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, name: this.name, date: this.age, note: this.note }),
    });
  };

  static deleteEtudiant = async (id) => {
    await fetch(`${ENDPOINT}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  };
}
