import api from "@/helpers/api"

export class Occurrenceservice {
    public static create(description: string, level: string, students: string[], tutors: number[]) {
        return api.post('/occurrences', {
            description: description,
            level: level,
            students: students,
            tutors: tutors
        }).then(response => response.data)
    }

    public static edit(id: number, description: string, level: string, students: string[], tutors: number[]) {
        return api.post(`/occurrences/edit/${id}`, {
            description: description,
            level: level,
            students: students,
            tutors: tutors
        }).then(response => response.data)
    }

    public static findOccurrences(page: number, limit: number, isArchive: boolean, queryStudent?: string, queryUser?: number, queryClass?: string) {
        return api.get('/occurrences', {
            params: {
                page: page,
                limit: limit,
                isArchive: isArchive.toString(),
                queryStudent: queryStudent,
                queryUser: queryUser,
                queryClass: queryClass
            },
        }).then(response => response.data)
    }

    public static assume(id: number) {
        return api.put(`/occurrences/${id}`).then(response => response.data)
    }

    public static dispatch(id: number, dispatch: string, isEdit: boolean) {
        return api.post(`/occurrences/${id}`, {
            dispatch: dispatch,
            isEdit: isEdit
        })
    }

    public static conclue(id: number) {
        return api.delete(`/occurrences/${id}`).then(response => response.data)
    }

    public static cancel(id: number) {
        return api.delete(`/occurrences/cancel/${id}`).then(response => response.data)
    }
}