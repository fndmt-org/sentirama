/* eslint-disable no-use-before-define */
import React from 'react';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import {
    AutcompleteField,
    AutcompleteInput,
    AutocompleteItemListBase,
    AutcompleteList,
} from './autocomplete.styles';


export default function UseAutocomplete(
    {
        id,
        options,
        label,
        groupBy = () => {},
        onChange = () => {},
        getOptionLabel = () => {}
    }
) {
    const {
        getRootProps,
        getInputLabelProps,
        getInputProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
    } = useAutocomplete({
        id,
        options,
        onChange,
        getOptionLabel,
    });

    return (
        <AutcompleteField>
        <div {...getRootProps()}>
            <label {...getInputLabelProps()}>{label}</label>
            <AutcompleteInput placeholder={label} {...getInputProps()} />
        </div>
        {groupedOptions.length > 0 ? (
            <AutcompleteList {...getListboxProps()}>
            {groupedOptions.map((option, index) => (
                <AutocompleteItemListBase {...getOptionProps({ option, index })}>{option.name}</AutocompleteItemListBase>
            ))}
            </AutcompleteList>
        ) : null}
        </AutcompleteField>
    );
}
