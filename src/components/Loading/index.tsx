import { LinearProgressProps, styled } from '@mui/material';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';

const StyledProgress = styled(LinearProgress)(() => ({
  height: 5,
  borderRadius: 2.5,
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 2.5,
  },
}));


interface ILoading {
  noSpace?: boolean;
  color?: LinearProgressProps['color'];
}
const Loading = ({ noSpace = false, color = 'primary' }: ILoading) => {
  return (
    <div className={noSpace ? '' : 'p-8'}>
      <StyledProgress color={color} />
    </div>
  );
};

export default Loading;