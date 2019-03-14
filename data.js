function Place (name, home, costco, target, safeway, traderjoes, montereymarket, meatmarket, postoffice, cvs){
    this.name = name;
    this.distanceHome = home;
    this.distanceCostco = costco;
    this.distanceTarget = target;
    this.distanceSafeway = safeway;
    this.distanceTraderjoes = traderjoes;
    this.distanceMontereymarket = montereymarket;
    this.distanceMeatmarket = meatmarket;
    this.distancePostoffice = postoffice;
    this.distanceCVS = cvs;
}

//name, home, costco, target, safeway, traderjoes, montereymarket, meatmarket, postoffice, cvs

home = new Place("Home", 0, 3.5, 2.4, 0.7, 1.0, 0.6, 1.7, 1.4, 0.8);
costco = new Place("Costco", 3.5, 0, 2.1, 4.0, 4.7, 3.4, 3.7, 5.0, 6.8);
target = new Place("Target", 2.4, 2.1, 0, 2.9, 3.2, 2.0, 2.0, 3.5, 5.6);
safeway = new Place("Safeway", 0.7, 4.0, 2.9, 0, 0.9, 1.0, 2.0, 0.9, 0.5);
traderjoes = new Place("Trader Joe's", 1.0, 4.7, 3.2, 0.9, 0, 1.3, 1.4, 0.4, 0.6);
montereymarket = new Place("Monterey Market", 0.6, 3.4, 2.0, 1.0, 1.3, 0, 1.2, 1.6, 2.9);
meatmarket = new Place("Meat Market", 1.7, 3.7, 2.0, 2.0, 1.4, 1.2, 0, 1.5, 2.6);
postoffice = new Place("Post Office", 1.4, 5.0, 3.5, 0.9, 0.4, 1.6, 1.5, 0, 1.3);
cvs = new Place("CVS Pharmacy", 0.8, 6.8, 5.6, 0.5, 0.6, 2.9, 2.6, 1.3, 0);

var places = [home, costco, target, safeway, traderjoes, montereymarket, meatmarket, postoffice, cvs];

