export const errorCatch = (fn: any,final:any) => {
    try {
        return fn()
    } catch (error) {
        console.log(error, 'error')
    }finally{
        final
    }
}