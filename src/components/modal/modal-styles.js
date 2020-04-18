import Theme from '../../theme/theme';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    position: 'absolute',
    backgroundColor: Theme.colors.white,
    borderRadius: '0.3125rem',
    boxShadow: '0 0 2.5rem rgba(0,0,0,0.5)',
    padding: Theme.space.md,
    transform: 'translate(-50%, -50%)',
    transition: 'transform 0.25s',
    transitionDelay: '0.15s',
    top: '50%',
    left: '50%',
    outlineWidth: 0,
  },
  close: {
    marginLeft: 'auto',
    cursor: 'pointer',
    marginTop: Theme.space[0],
  },
};

export default styles;
