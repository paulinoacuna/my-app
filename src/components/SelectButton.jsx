import * as React from 'react';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';
import { useEffect } from 'react';



export default function SelectButton({handleValue, type}) {

    const [selectValue, setSelectValue] = React.useState("estudiante");

    useEffect(() => {
        handleValue(selectValue)
    }, [selectValue]);


  return (
    <SelectUnstyled className="field selectButton" defaultValue={type == "role" ? "Estudiante": "C.C."} onChange={(e, newValue) => setSelectValue(newValue)}>

        { type == "role" && 
             <>
             <OptionUnstyled className="option" value="Estudiante">Estudiante</OptionUnstyled>
             <OptionUnstyled className="option" value="Administrador">Administrador</OptionUnstyled>
             </>
        }
        { type == "document" && 
            <>
            <OptionUnstyled className="option" value="C.C.">C.C.</OptionUnstyled>
            <OptionUnstyled className="option" value="C.E.">C.E.</OptionUnstyled>
            <OptionUnstyled className="option" value="T.I.">T.I.</OptionUnstyled>
            </>

        }
       
    </SelectUnstyled>
  );
}