package com.bx.implatform.session;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

/*
 * @Description
 * @Author Blue
 * @Date 2022/10/21
 */
public class SessionContext {

    // 使用ThreadLocal来存储UserSession
    private static final ThreadLocal<UserSession> sessionThreadLocal = new ThreadLocal<>();

    public static UserSession getSession() {
        // 首先尝试从ThreadLocal中获取
        UserSession session = sessionThreadLocal.get();
        if (session == null) {
            // 如果ThreadLocal中没有，再尝试从请求上下文中获取
            ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
            if (requestAttributes != null) {
                session = (UserSession) requestAttributes.getRequest().getAttribute("session");
            }
        }
        return session;
    }

    public static void setSession(UserSession session) {
        sessionThreadLocal.set(session); // 将UserSession存储到ThreadLocal中
    }

    public static void removeSession() {
        sessionThreadLocal.remove(); // 从ThreadLocal中移除UserSession
    }
}
