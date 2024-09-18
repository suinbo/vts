// noinspection CssUnresolvedCustomProperty,CssUnusedSymbol

'use client'

import styled from 'styled-components'

export const Page = styled.div`
  width: 210mm;
  //height: 297mm;
  padding: 20mm;
  
  box-sizing: border-box;
  //outline: 1px solid red;

  --hc: #7e7e7e;
  --bc: #dbdbdb;
  --bc-w: #f0f0f0;
  --note: #f8f1da;
  --lc: #7f7f7f;
  --fc: #fdfdfd;
  
  --double: 0.8mm;
  --bold: 0.55mm;
  --thin: 0.12mm;
  
  --fwl: 700;
  --fwb: 500;
  --fwr: 400;
  
  b, strong, th {
    font-weight: var(--fwb);
  }
  u {
    text-decoration-skip-ink: none;
  }

  * {
    margin: 0;
    padding: 0;
    //line-height: 1.4em;
  }
  table {
    border-collapse: collapse;
    border: var(--bold) solid var(--lc);
    box-sizing: border-box;
  }
  th,
  td {
    box-sizing: border-box;
    border: var(--thin) solid var(--lc);
  }
  strong {
    display: inline-block;
    background-color: black;
    color: white;
    line-height: 1.2em;
  }

  .accent {
    background-color: var(--bc);
  }
  .weak {
    background-color: var(--bc-w);
  }

  @media print {
    @page {
      size: A4;
      margin: 20mm 20mm 15mm 20mm;
      width: 100%;
    }

    width: 100%;
    height: 100%;
    padding: 0;
    page-break-before: always;    
    //table {
    //  page-break-inside: avoid;
    //}

    * {
      margin: 0;
      padding: 0;
      line-height: 1em;
      -webkit-print-color-adjust: exact; /* Chrome, Safari */
      print-color-adjust: exact; /* Firefox */
    }

    body {
      margin: 0;
      padding: 0;
      width: 210mm;
      /*height: 297mm;*/
      box-sizing: border-box;
    }
  }
`

export const Contents = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-flow: column nowrap;
  gap: 6px;
  
  color: black;
`

export const Header = styled.div`
  height: 9.98mm;
  //display: flex;
  //align-items: baseline;
  //justify-content: center;
  text-align: center;
  box-sizing: border-box;

  color: var(--fc);
  font-size: 16.5pt;
  font-weight: var(--fwl);
  letter-spacing: -0.06em;
  line-height: 1.6em;
  
  background-color: var(--hc);

  & > span {
    font-size: 14.5pt;
  }
`

export const Summary = styled.div`
  //height: 24.75mm;
  display: flex;
  //gap: 6px;
  justify-content: space-between;
  box-sizing: border-box;

  th {
    font-size: 11pt;
  }

  .target {
    th,
    td {
      height: 12.3mm;
    }
    th {
      width: 13.32mm;
    }
    td {
      font-size: 10pt;
      width: 29.81mm;
      padding: 0.5mm 1.8mm;
    }
  }

  .category {
    th {
      height: 5.88mm;
    }
    td {
      font-size: 9pt;
      text-align: center;
      
      &.relation {
        letter-spacing: -0.07em;
        padding: 0 0.5mm;
      }
      &.text {
        width: 13.83mm;
      }
      &.etc {
        padding: 0 0.5mm;
      }
    }
    
    .relation {
      width: 46.67mm;
      border-right: var(--bold) solid var(--lc);
    }
    .crime {
      width: 78.79mm;
    }
    .check {
      width: 5mm;
      border-right: var(--bold) solid var(--lc);
    }
    .etc {
      text-align: left;
      width: 21.6mm;
    }
  }
`

export const Help = styled.div`
  height: 12mm;
  display: flex;
  padding: 0 1.8mm;

  font-size: 10pt;
  line-height: 16em;
  letter-spacing: -0.05em;
  
  border-top: var(--bold) solid var(--lc);
  border-bottom: var(--bold) solid var(--lc);
  
  .decorator {
    width: 16pt;
  }
  .paragraph {
    flex-grow: 1;
  }
  p {
    line-height: 1.6em;
  }
`

export const CheckList = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13pt;

  .bt {
    border-top: var(--thin) solid var(--lc);
  }

  .header {
    height: 8mm;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 1.8mm;

    color: var(--fc);
    letter-spacing: -0.07em;
    font-weight: var(--fwl);
    background-color: var(--hc);
  }

  .table {
    border-top: none;

    th {
      padding: 0.5mm 0;
    }

    thead {
      height: 6.01mm;
      font-size: 11pt;

      .category {
        height: 6.01mm;
        width: 14mm;
        //width: 14.26mm;
      }

      .list {
        height: 6.01mm;
        width: 104.46mm;
      }

      .check {
        height: 6.01mm;
        width: 8.75mm;
        letter-spacing: -0.14em;
        &.yes {
          border-right: var(--bold) solid var(--lc);
          border-left: var(--bold) solid var(--lc);
        }
      }

      .note {
        height: 6.01mm;
        width: 27mm;
        //width: 25.72mm;
      }
    }

    tbody {
      td {
        padding: 0.5mm;
        border: none;
      }

      .category {
        width: 7mm;
        //width: 7.13mm;
        text-align: center;
        font-weight: var(--fwb);
        writing-mode: vertical-rl;
        border-right: var(--thin) solid var(--lc);
        border-bottom: var(--thin) solid var(--lc);

        &.weak {
          font-size: 9pt;
        }
      }

      .list {
        height: 9.82mm;
        font-size: 10pt;
        line-height: 1.3em;
        letter-spacing: -0.1em;
        border-bottom: var(--thin) dashed var(--lc);

        &.number {
          width: 7mm;
          //width: 7.47mm;
          text-align: center;
          border-right: var(--thin) dashed var(--lc);
        }
      }
      
      .check {
        text-align: center;
        border-bottom: var(--thin) dashed var(--lc);
        border-right: var(--thin) solid var(--lc);
        &.yes {
          border-right: var(--bold) solid var(--lc);
          border-left: var(--bold) solid var(--lc);
        }
      }

      .accent .note {
        background-color: var(--bc);
      }
      .note {
        font-size: 8pt;
        line-height: 1.05em;
        letter-spacing: -0.16em;
        background-color: var(--note);
        border-bottom: var(--thin) dashed var(--lc);
      }

      .accent {
        .title.list, .number.list {
          font-weight: var(--fwb);
        }
      }
    }
  }
`

export const Level = styled.div`
  //height: 53.33mm;
  display: flex;
  flex-direction: column;
  font-size: 13pt;
  font-weight: var(--fwb);
  
  .rb4 {
    border-right: var(--bold) solid var(--lc);
  }
  .rbd {
    border-right: var(--thin) dashed var(--lc);
  }
  .lbn {
    border-left: none;
  }
  
  .thead {
    //height: 6.53mm;
    th.level {
      height: 6.53mm;
    }

    .level, .decision {
      border-bottom: var(--double) double var(--lc);
    }
  }
  .tag {
    width: 6.89mm;
    writing-mode: vertical-rl;
    border-right: var(--double) double var(--lc);
  }
  .level {
    width: 60.58mm;
    line-height: 1em;
  }
  .decision {
    width: 42.7mm;
  }
  .count {
    //height: 8.23mm;
    height: 7.23mm;
    text-align: center;
    font-size: 12pt;
    font-weight: var(--fwb);
  }
  .decision-level {
    font-size: 14pt;
    text-align: center;
  }
  .level-head {
    width: 30.29mm;
    height: 5.35mm;
    text-align: center;
    border-top: var(--bold) solid var(--lc);
    border-bottom: var(--bold) solid var(--lc);
  }
  .level-body {
    height: 5.27mm;
    padding: 0 1.8mm;
    font-size: 12pt;
    font-weight: var(--fwb);
    
    &.number {
      text-align: center;
      border-right: var(--thin) dashed var(--lc);
    }
    &.check {
      border-left: none;
      border-right: var(--bold) solid var(--lc);
    }
  }
  .tip {
    font-size: 9pt;
    font-weight: var(--fwb);
    .tip-flex {
      display: flex;
      gap: 1pt;
    }
  }
  .tfoot {
    height: 6.88mm;
    font-size: 10pt;
    line-height: 1.5em;
    letter-spacing: -0.05em;
    font-weight: var(--fwb);
    color: red;
    border-top: var(--bold) solid var(--lc);
    text-align: center;
  }
`

export const Synth = styled.div`
  //height: 60.77mm;
  display: flex;
  width: 100%;
  font-size: 11.5pt;
  
  .title {
    //height: 8.07mm;
    height: 8mm;
    font-size: 13pt;
    letter-spacing: 0;
    line-height: 1.3em;
  }
  .summary {
    //height: 21.7mm;
    height: 21mm;
    font-size: 10pt;
    line-height: 1.1em;
    letter-spacing: -0.1em;
    padding: 0 1.8mm;
  }
  
  .other-table {
    font-size: 11pt;
    border-top: var(--bold) solid var(--lc);
    th {
      font-weight: var(--fwr);
    }
  }
  .thead {
    height: 7mm;
  }
  .diagonal {
    width: 28.24mm;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(14deg, transparent 49%, var(--lc) 50%, transparent 51%);
      z-index: 1;
    }
  }
  .alloc {
    width: 40.98mm;
  }
  .calloc {
    width: 33.93mm;
  }
  .tbody {
    //height: 8mm;
    height: 7mm;
    
    td {
      padding: 0.5mm 1.8mm;
      letter-spacing: 0;
      text-align: center;
      
      &.date {
        letter-spacing: 0.1em;
      }
    }
  }
`
