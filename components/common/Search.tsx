"use client";
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '../ui/button'

interface SearchTypes {
    onFocus: () => void;
    onBlur: () => void;
    isActiveSearch: boolean;
}

export default function Search({ onFocus, onBlur, isActiveSearch }: SearchTypes) {

    return (
        <div className="sa-toolbar__item sa-toolbar__item--search">
            <form className={`sa-search sa-search--state--pending ${isActiveSearch && 'sa-search--focus'}`}>
                <div className="sa-search__body">
                    <label className="visually-hidden" htmlFor="input-search">Search for:</label>
                    <div className="sa-search__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"
                            fill="currentColor">
                            <path
                                d="M16.243 14.828C16.243 14.828 16.047 15.308 15.701 15.654C15.34 16.015 14.828 16.242 14.828 16.242L10.321 11.736C9.247 12.522 7.933 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 7.933 12.522 9.247 11.736 10.321L16.243 14.828ZM6.5 2C4.015 2 2 4.015 2 6.5C2 8.985 4.015 11 6.5 11C8.985 11 11 8.985 11 6.5C11 4.015 8.985 2 6.5 2Z">
                            </path>
                        </svg>
                    </div>
                    <Input onBlur={onBlur} onFocus={onFocus} type="text" id="input-search" className="sa-search__input px-9" placeholder="Search for the truth" />
                    <Button type='button' className="sa-search__cancel d-sm-none" aria-label="Close search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"
                            fill="currentColor">
                            <path
                                d="M10.8,10.8L10.8,10.8c-0.4,0.4-1,0.4-1.4,0L6,7.4l-3.4,3.4c-0.4,0.4-1,0.4-1.4,0l0,0c-0.4-0.4-0.4-1,0-1.4L4.6,6L1.2,2.6 c-0.4-0.4-0.4-1,0-1.4l0,0c0.4-0.4,1-0.4,1.4,0L6,4.6l3.4-3.4c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L7.4,6l3.4,3.4 C11.2,9.8,11.2,10.4,10.8,10.8z">
                            </path>
                        </svg>
                    </Button>
                    <div className="sa-search__field"></div>
                </div>
                <div className="sa-search__dropdown">
                    <div className="sa-search__dropdown-loader"></div>
                    <div className="sa-search__dropdown-wrapper">
                        <div className="sa-search__suggestions sa-suggestions"></div>
                        <div className="sa-search__help sa-search__help--type--no-results">
                            <div className="sa-search__help-title">No results for &quot;<span
                                className="sa-search__query"></span>&quot;</div>
                            <div className="sa-search__help-subtitle">Make sure that all words are spelled
                                correctly.</div>
                        </div>
                        <div className="sa-search__help sa-search__help--type--greeting">
                            <div className="sa-search__help-title">Start typing to search for</div>
                            <div className="sa-search__help-subtitle">Products, orders, customers, actions, etc.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sa-search__backdrop"></div>
            </form>
        </div>
    )
}
