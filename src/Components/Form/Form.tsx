import { yupResolver } from '@hookform/resolvers/yup'
import { TextField } from '@mui/material'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { useFormStore } from '../../Store/FormStore'
import CloseIcon from '@mui/icons-material/Close';

const sxStyle = {
    "& .MuiInputBase-input": {
    color: "#FFFFFF",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#424242",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#FFFFFF", 
    },
    "& .MuiFormLabel-root": {
      color: "#FFFFFF",
    },      
}



const scheme = Yup.object().shape({
    email: Yup.string()
    .email('Некорректный адрес эл.почты')
    .required('Это поле обязательное'),
    password: Yup.string()
    .min(8, 'Слишком короткий пароль')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/, 'Слишком простой пароль')
    .required('Это поле обязательное'),    
    passwordAgain: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Пароли не совпадают')
    .required('Это поле обязательное')
})

interface IForm{
    email: string,
    password: string,
    passwordAgain: string
}

export const Form: FC = () => {

    const { vis, isVis } = useFormStore()

    const { handleSubmit, control, formState:{errors}} = useForm<IForm>({
        resolver: yupResolver(scheme),
        mode: 'onChange'
    })

    const onSubmit = (data: IForm): void => {
        console.log(data)
    }

    return(
        <>   
            {vis && <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <button type='button' onClick={() => isVis()} className='form__closeButton btn-reset'>
                    <CloseIcon/>
                </button>
                <h2 className='form__title'>Регестрация</h2>
                <Controller name='email' control={control} render={({field}) => (
                    <TextField
                    {...field}
                    label='Почта'
                    variant='outlined'
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    sx={sxStyle}                                        
                    />
                )}/>
                <Controller name='password' control={control} render={({field}) => (
                    <TextField
                    {...field}
                    variant='outlined'
                    label='Пароль'
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    sx={sxStyle}                    
                    />
                )}/>
                <Controller name='passwordAgain' control={control} render={({field}) =>(
                    <TextField
                    {...field}
                    label='Повторите пароль'
                    variant='outlined'
                    error={!!errors.passwordAgain}
                    helperText={errors.passwordAgain?.message}
                    sx={sxStyle}                                        
                    />
                )}
                />
                <button type='submit' className='button'>Зарегестрироваться</button>
            </form>                         
            }
            {vis && <div className='blur'></div>}                           
        </>
    )
}


