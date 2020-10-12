import styled from "styled-components";

const StyledForm = styled.div`
   .grid {
      max-width: 100%;
      // margin: 0;
      padding: 0 1rem;
      border-radius: 0.3rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
   }
   .left-col,
   .right-col {
      display: flex;
      flex-direction: column;
   }

   .left-col,
   .right-col {
      width: 48%;
   }
   input {
      margin: 0.5rem 0;
      border: 0;
      border-bottom: 0.05rem solid #aaa;
   }
   button {
     display: block;
   //   margin-top: 0;
   }
   @media screen and (max-width: 600px) {
      .grid{
         flex-direction: column;
         align-items: stretch;
      }
      .left-col,
      .right-col {
         width: 100%;
      }
   }
`;

export default StyledForm;
