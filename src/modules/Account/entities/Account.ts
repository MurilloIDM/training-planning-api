export class Account {
  id: number;
  name: string;
  email: string;
  password: string;
  language: "PT_BR" | "EN_US";

  constructor(id: number, name: string, email: string, password: string, language: "PT_BR" | "EN_US") {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.language = language;
  }
}
