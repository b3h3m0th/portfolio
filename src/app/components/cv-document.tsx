import {
  Page,
  Text,
  Document,
  StyleSheet,
  Font,
  Image,
  View,
  Svg,
  Path,
} from "@react-pdf/renderer";

export const KeyDataItem = ({ svg, title, value }: any) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 8,
        marginVertical: 2,
      }}
    >
      <View>
        <Svg
          height={20}
          width={20}
          viewBox="0 0 24 24"
          style={{ marginTop: 3 }}
        >
          {svg}
        </Svg>
      </View>
      <View style={{ marginLeft: 2 }}>
        <Text
          style={{
            color: "#fff",
            fontFamily: "switzer",
            fontWeight: 800,
            fontSize: 11,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            color: "#fff",
            fontFamily: "switzer",
            fontSize: 10,
          }}
        >
          {value}
        </Text>
      </View>
    </View>
  );
};

export const CVDocument = () => {
  return (
    <Document title="Simon_Ostini_CV_2024">
      <Page size="A4" style={styles.body}>
        <View
          style={{
            height: "100vh",
            width: "100vh",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: "#000",
              fontFamily: "clash",
              fontSize: 14,
              marginBottom: 4,
            }}
          >
            Currently under construction :)
          </Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <Document title="Simon_Ostini_CV_2024">
      <Page size="A4" style={styles.body}>
        <View
          style={{
            height: "100vh",
            width: "100vh",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              backgroundColor: "#000",
              height: "100%",
              flex: 1,
              display: "flex",
            }}
          >
            <View
              style={{
                flex: 2,
              }}
            >
              <Image
                src={"/images/simon_ostini_profile_picture.jpg"}
                style={{ height: "100%", objectFit: "cover" }}
              />
            </View>
            <View
              style={{
                backgroundColor: "#000",
                flex: 5,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <View style={{ flex: 1, padding: 24 }}>
                <Text
                  style={{
                    color: "#fff",
                    fontFamily: "clash",
                    fontSize: 14,
                    marginBottom: 4,
                  }}
                >
                  Profile
                </Text>
                <View
                  style={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                  <KeyDataItem
                    svg={
                      <Path
                        d="M12 2C9.38 2 7.25 4.13 7.25 6.75c0 2.57 2.01 4.65 4.63 4.74.08-.01.16-.01.22 0h.07a4.738 4.738 0 0 0 4.58-4.74C16.75 4.13 14.62 2 12 2ZM17.08 14.149c-2.79-1.86-7.34-1.86-10.15 0-1.27.85-1.97 2-1.97 3.23s.7 2.37 1.96 3.21c1.4.94 3.24 1.41 5.08 1.41 1.84 0 3.68-.47 5.08-1.41 1.26-.85 1.96-1.99 1.96-3.23-.01-1.23-.7-2.37-1.96-3.21Z"
                        fill="#ffffff"
                      ></Path>
                    }
                    title="Name"
                    value="Simon Ostini"
                  />
                  <KeyDataItem
                    svg={
                      <Path
                        d="M22 21.251h-1.25v-10.25c0-2.42-1.33-3.75-3.75-3.75h-4.25v-1.23c.58.14 1.16.22 1.75.22.94 0 1.88-.18 2.78-.54.28-.11.47-.39.47-.7v-3c0-.25-.12-.48-.33-.62a.76.76 0 0 0-.7-.08c-1.43.57-3.01.57-4.44 0a.76.76 0 0 0-.7.08c-.21.14-.33.37-.33.62v5.25H7c-2.42 0-3.75 1.33-3.75 3.75v10.25H2c-.41 0-.75.34-.75.75s.34.75.75.75h20c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Zm-14.76 0H4.75v-8.5h2.49v8.5Zm4 0h-2.5v-8.5h2.5v8.5Zm4 0h-2.5v-8.5h2.5v8.5Zm4.01 0h-2.51v-8.5h2.51v8.5Z"
                        fill="#ffffff"
                      ></Path>
                    }
                    title="Nationality"
                    value="Austria"
                  />
                  <KeyDataItem
                    svg={
                      <Path
                        d="M16.75 3.56V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5h-6.5V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.56c-2.7.25-4.01 1.86-4.21 4.25-.02.29.22.53.5.53h16.92c.29 0 .53-.25.5-.53-.2-2.39-1.51-4-4.21-4.25ZM20 9.84H4c-.55 0-1 .45-1 1V17c0 3 1.5 5 5 5h8c3.5 0 5-2 5-5v-6.16c0-.55-.45-1-1-1ZM9.21 18.21c-.05.04-.1.09-.15.12-.06.04-.12.07-.18.09-.06.03-.12.05-.18.06-.07.01-.13.02-.2.02-.13 0-.26-.03-.38-.08-.13-.05-.23-.12-.33-.21-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.1-.09.2-.16.33-.21.18-.08.38-.1.58-.06.06.01.12.03.18.06.06.02.12.05.18.09l.15.12c.18.19.29.45.29.71 0 .26-.11.52-.29.71Zm0-3.5c-.19.18-.45.29-.71.29-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.28-.28.72-.37 1.09-.21.13.05.24.12.33.21.18.19.29.45.29.71 0 .26-.11.52-.29.71Zm3.5 3.5c-.19.18-.45.29-.71.29-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.37-.37 1.05-.37 1.42 0 .18.19.29.45.29.71 0 .26-.11.52-.29.71Zm0-3.5-.15.12c-.06.04-.12.07-.18.09-.06.03-.12.05-.18.06-.07.01-.13.02-.2.02-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.09-.09.2-.16.33-.21.37-.16.81-.07 1.09.21.18.19.29.45.29.71 0 .26-.11.52-.29.71Zm3.5 3.5c-.19.18-.45.29-.71.29-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.37-.37 1.05-.37 1.42 0 .18.19.29.45.29.71 0 .26-.11.52-.29.71Zm0-3.5-.15.12c-.06.04-.12.07-.18.09-.06.03-.12.05-.18.06-.07.01-.14.02-.2.02-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.1-.09.2-.16.33-.21.18-.08.38-.1.58-.06.06.01.12.03.18.06.06.02.12.05.18.09l.15.12c.18.19.29.45.29.71 0 .26-.11.52-.29.71Z"
                        fill="#ffffff"
                      ></Path>
                    }
                    title="Birthdate"
                    value="22.10.2003"
                  />
                  <KeyDataItem
                    svg={
                      <Path
                        d="M20.621 8.45c-1.05-4.62-5.08-6.7-8.62-6.7h-.01c-3.53 0-7.57 2.07-8.62 6.69-1.17 5.16 1.99 9.53 4.85 12.28a5.436 5.436 0 0 0 3.78 1.53c1.36 0 2.72-.51 3.77-1.53 2.86-2.75 6.02-7.11 4.85-12.27Zm-8.62 5.01a3.15 3.15 0 1 1 0-6.3 3.15 3.15 0 0 1 0 6.3Z"
                        fill="#ffffff"
                      ></Path>
                    }
                    title="Address"
                    value={
                      <Text>
                        Heimgarten 1{"\n"}
                        6850 Dornbirn{"\n"}
                        Austria
                      </Text>
                    }
                  />
                </View>
                <Text
                  style={{
                    color: "#fff",
                    fontFamily: "clash",
                    fontSize: 14,
                    marginBottom: 4,
                    marginTop: 16,
                  }}
                >
                  Contact
                </Text>
                <View
                  style={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                  <KeyDataItem
                    svg={
                      <Path
                        d="m16.14 2.96-9.03 3c-6.07 2.03-6.07 5.34 0 7.36l2.68.89.89 2.68c2.02 6.07 5.34 6.07 7.36 0l3.01-9.02c1.34-4.05-.86-6.26-4.91-4.91Zm.32 5.38-3.8 3.82c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.8-3.82c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06Z"
                        fill="#ffffff"
                      ></Path>
                    }
                    title="E-Mail"
                    value="simonostini@gmail.com"
                  />
                  <KeyDataItem
                    svg={
                      <Path
                        fill="#ffffff"
                        d="M11.05 14.95L9.2 16.8c-.39.39-1.01.39-1.41.01-.11-.11-.22-.21-.33-.32a28.414 28.414 0 01-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.1.1.21.2.31.3.4.39.41 1.03.01 1.43zM21.97 18.33a2.54 2.54 0 01-.25 1.09c-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.01 0-.02.01-.03.01-.59.24-1.23.37-1.92.37-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98c-.39-.29-.78-.58-1.15-.89l3.27-3.27c.28.21.53.37.74.48.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78z"
                      ></Path>
                    }
                    title="Phone"
                    value="+43 650 844 1272"
                  />
                  <KeyDataItem
                    svg={
                      <Path
                        fill="#ffffff"
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      />
                    }
                    title="Github"
                    value="b3h3m0th"
                  />
                  <KeyDataItem
                    svg={
                      <Path
                        fill="#ffffff"
                        d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z"
                      />
                    }
                    title="Stack Overflow"
                    value="user:12834972"
                  />
                </View>
              </View>
              <Image
                src={"/images/baroque-wallpaper.png"}
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.1,
                }}
              />
            </View>
          </View>
          <View style={{ height: "100%", flex: 3, padding: 24 }}>
            <Text style={{ color: "#000", fontFamily: "clash", fontSize: 40 }}>
              SIMON OSTINI
            </Text>
          </View>
        </View>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

Font.register({
  family: "switzer",
  fonts: [
    {
      src: "/fonts/Switzer-Variable.ttf",
      fontWeight: 800,
    },
    {
      src: "/fonts/Switzer-Variable.ttf",
      fontWeight: 500,
    },
  ],
});
Font.register({
  family: "clash",
  src: "/fonts/ClashDisplay-Variable.ttf",
});

const styles = StyleSheet.create({
  body: {
    fontSize: 11,
    fontFamily: "switzer",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "switzer",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "clash",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  pageNumber: {
    position: "absolute",
    padding: 24,
    fontSize: 11,
    bottom: 0,
    right: 0,
    textAlign: "right",
    color: "#000",
  },
});
