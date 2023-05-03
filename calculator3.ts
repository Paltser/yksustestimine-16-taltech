class Calculator {
    private panelContents: string;

    constructor() {
        this.panelContents = "0";
    }

    getPanelContents(): string {
        return this.panelContents;
    }

    pressButton(button: string): void {
        if (this.panelContents === "0" && button !== "C") {
            this.panelContents = button;
        } else {
            this.panelContents += button;
        }

        if (button === "C") {
            this.panelContents = "0";
        }
    }
}

export { Calculator };
