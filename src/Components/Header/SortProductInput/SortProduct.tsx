import { Autocomplete, Stack, TextField } from "@mui/material";
import { product } from "../../../Pages/Catalog/Catalog";
import { useSortStore } from "../../../Store/SortStore";

export function Sort(){    
    
    const { newValue, clearValue } = useSortStore()          

    return(
        <Stack spacing={2} sx={{width: 300, "& .MuiInputBase-input": {
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
    }, }}>             
            <Autocomplete
            disableClearable
            freeSolo       
            onChange={newValue}                         
            options={product.map((item) => item.name)}
            renderInput={
                (params) =>
                <TextField
                label='Поиск...'                
                {...params}
                slotProps={{
                    input:{
                        ...params.InputProps,
                        type: 'search', 
                        onClick: clearValue,                                             
                    }
                }}
                />
            }            
            />        
        </Stack>
    )
}
