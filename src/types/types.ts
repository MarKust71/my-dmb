export type PageProps<TParams extends Record<string, any>> = {
  params: Promise<TParams>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
