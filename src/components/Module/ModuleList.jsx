// components/Module/ModuleList.jsx
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

function ModuleList({ modules }) {
    return (
        <List>
            {modules.map((module) => (
                <ListItem button component={Link} to={`/modules/${module.ID}`} key={module.ID}>
                    <ListItemText primary={`${module.Order}. ${module.Title}`} />
                </ListItem>
            ))}
        </List>
    );
}

export default ModuleList;