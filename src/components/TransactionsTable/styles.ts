import styled from "styled-components";

export const Container  = styled.div`
    margin-top: 4rem;

    table{
        /* Por default a tble não ocupa todo espaço */
        width: 100%;
        border-spacing: 0 0.5rem;

        th{
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;            
            line-height:1.5rem;
        }

        td{
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            border-radius: 0.25rem;

            &:first-child{
                color: var(--text-title);
                font-weight: bold;
            }

            &.deposit{
                color: var(--green);
            }

            &.withdraw{
                color: var(--red);
            }
        }

        
    }
`;