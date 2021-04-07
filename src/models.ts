import { red as chalkRed } from "chalk";

export class Tree<T> {
    root: TreeNode<T>;

    constructor(data: T) {
        this.root = new TreeNode<T>(data);
    }

    public print(): void {
        this.root.childrens.forEach(child => {
            child.print();
        });   
    }

    public search(searchTerm: string) : Array<TreeNode<T>> {
        return this.root.childrens.filter(child => {
            let contains : boolean = child.contains(searchTerm);
            if (contains) {
                return child;
            }
        });
    }
}

export class TreeNode<T> {
    data: T;
    childrens: Array<TreeNode<T>>;

    constructor(data: T) {
        this.data = data;
        this.childrens = new Array<TreeNode<T>>();
    }

    public addChild(data : T): void {
        let childNode : TreeNode<T> = new TreeNode(data);
        this.childrens.push(childNode);
    }

    public print(prefix : string = ""): void {

        console.log(`${prefix}${this.data}`);
        prefix += "   ";

        this.childrens.forEach(child => {
            child.print(prefix);
        });
    }

    public printHighlighted(searchItem: string, prefix : string = ""): void {

        if (this.isLeaf() && String(this.data).toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())) {
            console.log(`${prefix}${chalkRed(this.data)}`);
        } else {
            console.log(`${prefix}${this.data}`);
            prefix += "   ";
    
            this.childrens.forEach(child => {
                child.printHighlighted(searchItem, prefix);
            });
        }
    }

    public contains(searchItem : string): boolean {

        if (this.isLeaf() && String(this.data).toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())) {
            return true;
        } else {
            for (let index = 0; index < this.childrens.length; index++) {
                const node = this.childrens[index];
                let contains : boolean = node.contains(searchItem);
                if (contains) {
                    return true;
                }
            }
        }
        return false;
    }

    private isLeaf(): boolean {
        return this.childrens.length == 0;
    }
}