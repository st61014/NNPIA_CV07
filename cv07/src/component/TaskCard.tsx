import {Task} from "../data/init-data";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Checkbox, InputLabel} from "@mui/material";

interface Props {
    task: Task
    onTaskDone: (task: Task) => void
}

const TaskCard = ({task, onTaskDone}: Props) => {
    const doneClickHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        task.done = e.target.checked;
        onTaskDone(task);
    };

    return <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
        <CardContent sx={{flexGrow: 1}}>
            <Typography gutterBottom variant="h5" component="h2">{task.title}</Typography>
            <Typography>{task.description}</Typography>
            <Typography>{task.creationDate.toISOString()}</Typography>
            <Typography>{task.updateDate?.toISOString()}</Typography>
            <Checkbox name="done" onChange={doneClickHandle} checked={task.done}/>

        </CardContent>
    </Card>
}

export default TaskCard;