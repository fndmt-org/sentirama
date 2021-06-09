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
        defaultValue,
        getOptionLabel = () => {},
        groupBy = () => {},
        id,
        value,
        label,
        onChange = () => {},
        options,
    }
) {
    const {
        getInputLabelProps,
        getInputProps,
        getListboxProps,
        getOptionProps,
        getRootProps,
        groupedOptions,
    } = useAutocomplete({
        defaultValue,
        getOptionLabel,
        id,
        value,
        onChange,
        options,
    });

    return (
        <AutcompleteField>
        <div {...getRootProps()}>
            <label {...getInputLabelProps()}>{label}</label>
            <AutcompleteInput placeholder={label} value={value} {...getInputProps()} />
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
