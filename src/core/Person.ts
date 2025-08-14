export default class Person {
  private id: string | null;
  private name: string;
  private company: string;
  private profile: string;
  private lastContact: Date;
  private whatToSay: string;

  constructor(
    id: string | null = null,
    name: string,
    company: string,
    profile: string,
    lastContact: Date,
    whatToSay: string
  ) {
    this.id = id;
    this.name = name;
    this.company = company;
    this.profile = profile;
    this.lastContact = lastContact;
    this.whatToSay = whatToSay;
  }

  static void() {
    return new Person("", "", "", "", new Date(), "");
  }

  get personID(): string | null {
    return this.id;
  }

  get personName(): string {
    return this.name;
  }

  get personCompany(): string {
    return this.company;
  }

  get personProfile(): string {
    return this.profile;
  }

  get personLastContact(): Date {
    return this.lastContact;
  }

  get personWhatToSay(): string {
    return this.whatToSay;
  }
}
