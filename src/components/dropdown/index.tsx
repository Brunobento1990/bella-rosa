import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { useThemeApp } from '../../hooks/theme-app';

interface PropDropDown {
    options: any[],
    handleOrderBy: (value: string) => void;
}

const ITEM_HEIGHT = 48;

export function DropDown(props: PropDropDown) {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const themeApp = useThemeApp();
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (value: string) => {
        props.handleOrderBy(value)
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {props.options.map((option) => (
                    <MenuItem
                        key={option?.id}
                        onClick={() => handleClose(option?.option)}
                        sx={{
                            fontFamily: `${themeApp.fontFamily.fontMain}`,
                            fontWeight: '600'
                        }}
                    >
                        {option?.option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}