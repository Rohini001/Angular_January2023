//4)Create a class of item (itemid, itemname, itemprice, category) and create object of the class and print each detail of item. With arrow functions.
var Item = /** @class */ (function () {
    function Item(itemid, itemname, itemprice, category) {
        var _this = this;
        this.display = function () {
            console.log("ItemId=" + _this.itemid + ",Item Name=" + _this.itemname + ",Item Price="
                + _this.itemprice + ",Category=" + _this.category);
        };
        this.itemid = itemid;
        this.itemname = itemname;
        this.itemprice = itemprice;
        this.category = category;
    }
    return Item;
}());
var item = new Item(101, "Laptop", 50000, "Lenovo");
item.display();
