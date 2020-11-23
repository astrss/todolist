import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Column = styled.div`
  background-color: #D3D3D3;
  width: 500px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const ColumnInput = styled.input`
  width: 100%
`;

export const Button = styled.div`
  background-color: #000000;
  color: #ffffff;
  margin-left: 20px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ColumnHeader = styled.div`
  display: flex;
`;

export const ColumnList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnItemText = styled.div`
  ${({ complete }) => complete && `
    text-decoration: line-through;
  `};
  white-space: pre-wrap;
  display: flex;
  overflow: hidden;
`;

export const ColumnItem = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
`;

export const ColumnContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 465px;
`;

export const ColumnItemCheckBox = styled.input`
  margin-right: 20px;
`;
