type VotationOption = {
  numberOfVotes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotation(): void {
    for (const votation of this.votations) {
      console.log(votation.details);

      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }
      console.log("\n");
    }
  }
}

const votation1 = new Votation(
  "Qual sua linguagem de programação favorita? \n",
);
votation1.addVotationOption({ option: "Pythons", numberOfVotes: 0 });
votation1.addVotationOption({ option: "JavaScript", numberOfVotes: 0 });
votation1.addVotationOption({ option: "TypeScript", numberOfVotes: 0 });

const votationApp = new VotationApp();
votationApp.addVotation(votation1);

votationApp.showVotation();
