import { styled } from ".."

export const ProductContainer = styled('main', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    gap: '4rem',
    maxwidth: 1180,
    margin: '0 auto',
})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: '576px',
    height: '656px',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover',
    },
})

export const ProductDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    h1: {
        fontSize: '$2xl',
        color: '$gray300',
    },

    span: {
        marginTop: '1rem',
        display: 'block',
        fontSize: '$2xl',
        color: '$green400',
    },

    p : { 
        marginTop: '2rem',
        fontSize: '$md',
        lineHeight: 1.5,
        color: '$gray300',

        width: 500,
        overflowWrap: 'break-word',
        wordWrap: 'break-word',
        wordBreak: 'break-word',
       
        
    },

   
    button: {
        marginTop: 'auto',
        backgroundColor: '$green500',
        border: 0,
        color: '$white',
        borderRadius: 8,
        padding: '1.25rem',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '$md',


        '&:disabled': {
            opacity: 0.5,
            cursor: 'not-allowed',

        },

        '&:not(:disabled):hover': {
            backgroundColor: '$green400',
        }



    }
})
