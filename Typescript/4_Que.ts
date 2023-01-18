//4)Create a class of item (itemid, itemname, itemprice, category) and create object of the class and print each detail of item. With arrow functions.

class Item {
    itemid: number;
    itemname: string;
    itemprice: number;
    category: string;

    constructor(itemid: number, itemname: string,itemprice: number,category: string) {
        this.itemid = itemid;
        this.itemname = itemname;
        this.itemprice = itemprice;
        this.category = category;
    }

    display = () => {
        console.log("ItemId=" + this.itemid + ",Item Name=" + this.itemname + ",Item Price=" 
        + this.itemprice + ",Category=" + this.category);
    }
}

let item = new Item(101,"Laptop",50000,"Lenovo");
item.display();