import { forwardRef } from "react";
import { BiErrorCircle } from "react-icons/bi";
import { Container, Error } from "./styles";

const Input = forwardRef(
    ({ id, label, error, placeholder, autoComplete, ...register }, ref) => (
        <>
            <label htmlFor={id}>{label}</label>
            <Container>
                <input
                    autoComplete={autoComplete}
                    placeholder={placeholder}
                    id={id}
                    type="text"
                    {...register}
                    ref={ref}
                />

                {error?.message && (
                    <Error>
                        <BiErrorCircle />
                        <span>{error.message}</span>
                    </Error>
                )}
            </Container>
        </>
    )
);

export default Input;

