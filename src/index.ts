import { TreeNode, Tree } from "./models";
import { buildMenu } from "./helper";
import { menuItemProperties, searchItemProperties } from "./statics";
import { get as promptGet, start as promptStart } from "prompt";

async function main() {

    let menu : Tree<string> = buildMenu();

    console.log("======================= START MENU =======================")

    menu.print();

    console.log("======================= END MENU =======================")

    promptStart();
    const { searchTerm } = await promptGet(searchItemProperties);

    const searchedMenuItems : Array<TreeNode<string>> = menu.search(searchTerm.toString());

    if (searchedMenuItems.length == 0) {
        console.log("There are no menu items with provided ingredient!");
        return;
    }

    searchedMenuItems.forEach((item, index) => {
        console.log(`${index + 1}. ${item.data}`);
    });

    const { menuItemNumber } = await promptGet(menuItemProperties);

    let menuIndex = +menuItemNumber - 1;

    if ( menuIndex >= 0 && menuIndex < searchedMenuItems.length ) {
        searchedMenuItems[menuIndex].printHighlighted(searchTerm.toString());
    } else {
        console.log("The choosen menu item does not exist!");
    }
}

main();