import React from "react";
import Drawer from './Drawer';
import DrawerButton from "./DrawerButton";

class Demo extends React.Component {
    render() {
        return (
            <div>
                <Drawer
                    name={"top-drawer"}
                    direction={"top"}
                >
                    <div>TOP</div>
                </Drawer>

                <Drawer
                    name={"left-drawer"}
                    direction={"left"}
                >
                    <div>LEFT</div>
                    <DrawerButton
                        toggle={"left-drawer"}
                        label={"Left drawer"}
                    />
                </Drawer>

                <Drawer
                    name={"right-drawer"}
                    direction={"right"}
                >
                    <div>RIGHT</div>
                </Drawer>

                <Drawer
                    name={"bottom-drawer"}
                    direction={"bottom"}
                >
                    <div>BOTTOM</div>
                </Drawer>

                <DrawerButton
                    toggle={"top-drawer"}
                    label={"Top drawer"}
                />

                <DrawerButton
                    toggle={"left-drawer"}
                    label={"Left drawer"}
                />

                <DrawerButton
                    toggle={"bottom-drawer"}
                    label={"Bottom drawer"}
                />

                <DrawerButton
                    toggle={"right-drawer"}
                    label={"Right drawer"}
                />

            </div>
        )
    }
}

export default Demo;