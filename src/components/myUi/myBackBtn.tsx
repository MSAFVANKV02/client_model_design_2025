import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Tooltip } from '@mui/material';



import { useNavigate } from 'react-router-dom'

type Props = {
    icon?: string;
    className?: string;
    title?: string;
}

function MyBackBtn({icon="bx:arrow-back", className, title = "back"}:Props) {
    const navigate = useNavigate();
  return (
    <Tooltip title="back" className="w-fit"  placement="right">
    <button onClick={() => navigate(-1)} className={cn(`flex items-center gap-2`,className)}>
        <Icon icon={`${icon}`} />  <span>{title && title}</span>
      </button>
    </Tooltip>

  )
}

export default MyBackBtn