// noinspection CssUnresolvedCustomProperty,CssUnusedSymbol

// 'use client'

import styled from 'styled-components'

export const Page = styled.div`
  width: 210mm;
  height: 297mm;
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

  b,
  strong,
  th {
    font-weight: var(--fwb);
  }
  u {
    text-decoration-skip-ink: none;
  }

  * {
    margin: 0;
    padding: 0;
    line-height: 1em;
  }
  table {
    border-collapse: collapse;
    border: var(--thin) solid var(--lc);
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
  //gap: 8.5pt;

  color: black;
`

export const Header = styled.div`
  font-weight: var(--fwb);

  .header {
    font-size: 12pt;
    letter-spacing: 0;
    line-height: 1.6em;
  }

  .title {
    line-height: 1.6em;
    font-size: 19pt;
    font-weight: var(--fwl);
    text-align: center;

    & > .double {
      margin: 0 auto;
      width: fit-content;
      & > .double {
        border-bottom: 0.12mm solid black;
        margin-bottom: 0.3mm;
        line-height: 1.2em;
      }
      border-bottom: 1mm solid black;
    }
  }
`

export const Personal = styled.div`
  margin-top: 5pt;
  display: flex;
  flex-direction: column;
  font-size: 11.5pt;

  .table {
    border: var(--thin) dashed var(--lc);

    th,
    td {
      border: var(--thin) dashed var(--lc);
      vertical-align: middle;
      padding: 0.5mm 1.8mm;
    }

    th {
      height: 9.51mm;
      width: 12.16mm;
    }
    td.gender {
      width: 15.9mm;
    }
    td.age {
      width: 28.32mm;
    }
    td.name {
      width: 30.35mm;
    }
    th.date {
      width: 21.25mm;
    }
    td.date {
      width: 36.41mm;
    }
  }
`

export const Summary = styled.div`
  margin-top: 5pt;
  display: flex;
  flex-direction: column;
  padding: 1.8mm;
  gap: 4pt;

  font-size: 11.5pt;
  letter-spacing: 0.03em;
  border: var(--double) double var(--lc);

  p {
    padding-left: 24px;
    text-indent: -20px;
    line-height: 1.45em;
  }
`

export const Checklist = styled.div`
  margin-top: 5pt;
  display: flex;
  flex-direction: column;

  th {
    vertical-align: middle;
  }

  thead {
    font-size: 9pt;
    background-color: #edf4e6;

    th {
      height: 15.68mm;
      border-bottom: var(--double) double var(--lc);
      line-height: 1.5em;
    }

    .list {
      font-size: 13pt;
    }

    .check {
      width: 10.92mm;
    }
  }

  tbody {
    font-size: 11.5pt;

    td {
      text-align: center;
      vertical-align: middle;

      p {
        line-height: 1.6em;
      }

      &.list {
        padding: 0 1.8mm;
        text-align: left;
      }
      &.long > p {
        line-height: 1.3em;
      }
    }

    .list > p {
      text-indent: -20px;
      padding-left: 20px;
    }
  }
`
