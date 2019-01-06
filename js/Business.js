class Business {

    constructor () {
        this.id;
        this.owned = 0;
        this.base = 0;
        this.multiplier = 1;        
        this.earnings = this.owned * this.base * this.multiplier;
        this.baseTime = 0;
        this.countTime = 0;
        this.costBase = 0;
        this.costCurrent = 0;
        this.costNewBase = 0;
    }

    changeCost (multi) {
        this.costCurrent = 0;
        for (let i = 0; i < multi; i++) {
            if (i === 0) {
                if (multi === 1) {
                    this.costNewBase = Math.ceil(this.costBase * 1.02);
                } else {
                    this.costNewBase = this.costBase;
                }
                this.costCurrent = this.costBase;
            } else {
                this.costNewBase = Math.ceil(this.costNewBase * 1.02);
                this.costCurrent += this.costNewBase;                
            }
        }
    }

    buyBusiness (multiple) {
       if(this.costCurrent <= cash) {
           this.owned += multiple;
           cash -= this.costCurrent;
           owned[this.id].innerText = this.owned;
           totalCash.innerText = cash;
           this.earnings = this.owned * this.base * this.multiplier;
           this.costBase = this.costNewBase;
       } 
    }

    earn () {
        if (this.countTime === 0) {
            cash += this.earnings;
            totalCash.innerText = cash;
        }
    }

    increment () {
        if (this.countTime <= 0 && this.owned > 0) {
            this.countTime = this.baseTime;
            
        } else if (this.owned > 0) {
            this.countTime -= 1;
        }
    }

    
}

