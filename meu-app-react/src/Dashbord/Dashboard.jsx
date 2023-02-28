
import {
  FormControl, InputLabel, Input, CircularProgress,
} from '@material-ui/core';
import { Drawer } from './Drawer';
import ButtonAppBar from './ToolBar';


function DashboardComponent() {
  return (
    <>
      <Drawer />
    </>
  )
}
export const Dashboard = DashboardComponent;