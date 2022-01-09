import styled from "styled-components";

export function App() {
  return (
    <Grid>
      {range(1, 30).map((n) => (
        <Gradient key={n} variant={n} />
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: var(--size-3);
  padding: var(--size-3);
`;

const Gradient = styled.div<{ variant: number }>`
  aspect-ratio: var(--ratio-box);
  --op-gradient-direction: to top left;
  background-image: ${({ variant }) => `var(--gradient-${variant})`};
  box-shadow: var(--shadow-2);
  border-radius: var(--radius-blob-5);
`;

function range(start: number, end: number) {
  return Array.from({ length: end }, (_, i) => start + i);
}
