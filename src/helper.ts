import { Tree } from "./models";

export function buildMenu(): Tree<string> {

    let tree : Tree<string> = new Tree<string>("Root");

    tree.root.addChild("Bacon & eggs");
    tree.root.childrens[0].addChild("Bacon");
    tree.root.childrens[0].childrens[0].addChild("Meat");
    tree.root.childrens[0].childrens[0].childrens[0].addChild("Pork");

    tree.root.childrens[0].addChild("Ham Eggs");
    tree.root.childrens[0].childrens[1].addChild("Egg");

    tree.root.addChild("Hamburger");
    tree.root.childrens[1].addChild("Meat");
    tree.root.childrens[1].childrens[0].addChild("Pork");

    tree.root.childrens[1].addChild("Bread");
    tree.root.childrens[1].childrens[1].addChild("Flour");
    tree.root.childrens[1].childrens[1].addChild("Water");
    
    tree.root.childrens[1].addChild("Cheese");
    tree.root.childrens[1].childrens[2].addChild("Milk");
    
    tree.root.addChild("English breakfast");
    tree.root.childrens[2].addChild("Mushrooms");

    tree.root.childrens[2].addChild("Fried eggs");
    tree.root.childrens[2].childrens[1].addChild("Egg");

    tree.root.childrens[2].addChild("Sausages");
    tree.root.childrens[2].childrens[2].addChild("Meat");
    tree.root.childrens[2].childrens[2].childrens[0].addChild("Pork");

    tree.root.childrens[2].addChild("Bread");
    tree.root.childrens[2].childrens[3].addChild("Flour");
    tree.root.childrens[2].childrens[3].addChild("Water");

    return tree;
}